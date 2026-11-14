(() => {
  const $ = id => document.getElementById(id);
  const canvas=$("pfpCanvas"),ctx=canvas.getContext("2d");
  const categories={
    "Mouth & Snout":["Werewolf Face","Party Blower","Rose","Bubblegum","Shark Tooth","Happy Grin","Shocked Mouth","Smirk","Fang Grin"],
    "Hands & Arms":["Werewolf Claws","Finger Painter Glove","Stick","Golden Stick","Candy Cane","Sparkler","Turkey Leg"],
    "Hats & Headwear":["Top Hat","Ushanka","Party Hat","Cowboy Hat","Crown","Sun Hat","Headphones","Beanie","Witch Hat","Viking Helmet","Fez"],
    "Face & Eye Accessories":["Shutter Shades","Aviator Sunglasses","Monocle","VR Headset","Bandage","Face Paint","Heart Glasses","Cyclops Visor"],
    "Badges & Chest Items":["Moderator Stick Badge","Finger Painter Badge","Early Access Badge","Bowtie","Scarf","Gold Chain","Guitar"]
  };
  const equipped={};Object.keys(categories).forEach(k=>equipped[k]=new Set());
  const defaults={red:3,green:6,blue:9};
  const clampDigit=v=>Math.max(0,Math.min(9,Math.round(Number(v)||0)));
  const digitRGB=v=>Math.round((clampDigit(v)/9)*255);
  const rgbHex=(r,g,b)=>"#"+[r,g,b].map(v=>v.toString(16).padStart(2,"0")).join("").toUpperCase();
  function colorFromDigits(){return rgbHex(digitRGB($("red").value),digitRGB($("green").value),digitRGB($("blue").value))}
  function syncDigits(r,g,b){$("red").value=r;$("green").value=g;$("blue").value=b;$("quickCode").value=`${r}${g}${b}`}
  function renderGroups(){
    const host=$("cosmeticGroups");
    Object.entries(categories).forEach(([group,items],index)=>{
      const section=document.createElement("section");section.className="cosmetic-group";
      const toggle=document.createElement("button");toggle.className="group-toggle";toggle.type="button";
      const list=document.createElement("div");list.className="cosmetic-items";list.id=`group-${index}`;
      toggle.innerHTML=`<span>${group}</span><span>${items.length} items　⌄</span>`;
      items.concat("None").forEach(item=>{
        const b=document.createElement("button");b.type="button";b.className="cosmetic-item";b.textContent=item;b.setAttribute("aria-pressed","false");
        b.addEventListener("click",()=>{
          if(item==="None")equipped[group].clear();
          else {equipped[group].delete("None");equipped[group].has(item)?equipped[group].delete(item):equipped[group].add(item)}
          list.querySelectorAll("button").forEach(btn=>btn.setAttribute("aria-pressed",String(equipped[group].has(btn.textContent))));
          draw();
        });list.appendChild(b);
      });
      toggle.addEventListener("click",()=>{list.hidden=!list.hidden;toggle.lastElementChild.textContent=`${items.length} items　${list.hidden?"›":"⌄"}`});
      section.append(toggle,list);host.appendChild(section);
    });
  }
  function selected(group){return [...equipped[group]]}
  function draw(){
    const baseColor=$("useHex").checked?$("hexPicker").value:colorFromDigits();
    $("colorChip").style.background=baseColor;$("hexValue").textContent=baseColor.toUpperCase();
    $("solidColorRow").hidden=$("backgroundSelect").value!=="solid";
    ctx.clearRect(0,0,1024,1024);
    Cosmetics.background(ctx,$("backgroundSelect").value,$("solidColor").value);
    if($("glow").checked){ctx.save();ctx.shadowColor=baseColor;ctx.shadowBlur=62;ctx.fillStyle=baseColor;ctx.beginPath();ctx.arc(512,500,260,0,Math.PI*2);ctx.fill();ctx.restore()}
    const opts={tilt:Number($("headTilt").value),zoom:Number($("zoom").value),arms:$("showArms").checked,outline:$("outline").checked};
    Cosmetics.drawBase(ctx,baseColor,opts);
    selected("Hands & Arms").forEach(id=>{Cosmetics.hand(ctx,id,"left");Cosmetics.hand(ctx,id,"right")});
    selected("Badges & Chest Items").forEach(id=>Cosmetics.chest(ctx,id));
    selected("Hats & Headwear").forEach(id=>Cosmetics.hat(ctx,id));
    selected("Face & Eye Accessories").forEach(id=>Cosmetics.face(ctx,id));
    selected("Mouth & Snout").forEach(id=>Cosmetics.mouth(ctx,id));
  }
  function setInput(id,fn){$(id).addEventListener("input",fn);$(id).addEventListener("change",fn)}
  ["red","green","blue"].forEach(id=>setInput(id,()=>{
    $(id).value=clampDigit($(id).value);
    $("quickCode").value=$("red").value+$("green").value+$("blue").value;draw();
  }));
  setInput("quickCode",()=>{
    const raw=$("quickCode").value.replace(/\D/g,"").slice(0,3);$("quickCode").value=raw;
    if(raw.length===3){syncDigits(...raw.split("").map(Number));draw()}
  });
  ["headTilt","zoom"].forEach(id=>setInput(id,()=>{$(id==="headTilt"?"tiltValue":"zoomValue").textContent=id==="headTilt"?`${$("headTilt").value}°`:`${$("zoom").value}%`;draw()}));
  ["showArms","outline","glow","useHex","hexPicker","backgroundSelect","solidColor"].forEach(id=>$(id).addEventListener("input",draw));
  $("downloadBtn").addEventListener("click",()=>{
    canvas.toBlob(blob=>{
      if(!blob){alert("PNG export was not available. Please try again.");return}
      const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="my-gtag-profile-picture.png";
      document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
    },"image/png");
  });
  $("randomBtn").addEventListener("click",()=>{
    syncDigits(Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10));
    $("useHex").checked=false;
    Object.keys(categories).forEach(group=>{
      equipped[group].clear();const pool=categories[group];const count=Math.floor(Math.random()*3);
      for(let i=0;i<count;i++)equipped[group].add(pool[Math.floor(Math.random()*pool.length)]);
    });
    document.querySelectorAll(".cosmetic-group").forEach((section,i)=>section.querySelectorAll(".cosmetic-item").forEach(b=>b.setAttribute("aria-pressed",String(equipped[Object.keys(categories)[i]].has(b.textContent)))));
    $("headTilt").value=Math.floor(Math.random()*25)-12;$("zoom").value=90+Math.floor(Math.random()*21);
    $("tiltValue").textContent=$("headTilt").value+"°";$("zoomValue").textContent=$("zoom").value+"%";draw();
  });
  renderGroups();draw();
})();