/* Hand-authored canvas vector artwork. Shapes are original fan-made interpretations. */
(() => {
  const C = window.Cosmetics = {};
  const stroke = (ctx, width=15, color="#17131a") => { ctx.lineWidth=width;ctx.lineJoin="round";ctx.lineCap="round";ctx.strokeStyle=color; };
  const path = (ctx, commands, fill, line="#17131a", width=13) => {
    ctx.beginPath(); commands(ctx); if(fill){ctx.fillStyle=fill;ctx.fill()} if(line){stroke(ctx,width,line);ctx.stroke()}
  };
  const ellipse=(ctx,x,y,rx,ry,fill,line="#17131a",w=12,rot=0)=>{ctx.beginPath();ctx.ellipse(x,y,rx,ry,rot,0,Math.PI*2);ctx.fillStyle=fill;ctx.fill();if(line){stroke(ctx,w,line);ctx.stroke()}};
  const line=(ctx,pts,color="#17131a",w=12)=>{ctx.beginPath();ctx.moveTo(...pts[0]);pts.slice(1).forEach(p=>ctx.c.lineTo(...p));stroke(ctx,w,color);ctx.stroke()};
  const text=(ctx,s,x,y,size,fill="#fff",font="900")=>{ctx.font=`${font} ${size}px system-ui`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle=fill;ctx.fillText(s,x,y)};
  const fur=(ctx,x,y,scale=1,color="#302c36")=>{
    ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);
    path(ctx,c=>{c.moveTo(-80,30);c.c.quadraticCurveTo(-110,-8,-76,-50);c.c.lineTo(-46,-33);c.c.lineTo(-25,-83);c.c.lineTo(0,-42);c.c.lineTo(28,-85);c.c.lineTo(48,-34);c.c.lineTo(82,-54);c.c.quadraticCurveTo(103,-2,76,33);c.c.quadraticCurveTo(0,72,-80,30)},color);
    ctx.restore();
  };
  C.drawBase=(ctx,color,opts={})=>{
    const outline=opts.outline===false?"#0000":"#17131a";
    ctx.save();ctx.translate(512,520);ctx.rotate((opts.tilt||0)*Math.PI/180);ctx.scale((opts.zoom||100)/100,(opts.zoom||100)/100);
    // shoulders and arms
    if(opts.arms!==false){
      path(ctx,c=>{c.moveTo(-170,300);c.c.quadraticCurveTo(-310,260,-344,385);c.c.quadraticCurveTo(-360,454,-302,463);c.c.quadraticCurveTo(-242,467,-202,390);c.c.lineTo(-105,370);c.moveTo(170,300);c.c.quadraticCurveTo(310,260,344,385);c.c.quadraticCurveTo(360,454,302,463);c.c.quadraticCurveTo(242,467,202,390);c.c.lineTo(105,370)},color,outline,23);
      ellipse(ctx,-303,438,56,43,color,outline,20,-.25);ellipse(ctx,303,438,56,43,color,outline,20,.25);
      for(let i=0;i<4;i++){line(ctx,[[-337+i*18,438],[-330+i*18,466]],"#d9e6ff",5)}
    }
    // torso
    path(ctx,c=>{c.moveTo(-190,350);c.c.quadraticCurveTo(-220,150,-140,105);c.c.quadraticCurveTo(0,42,140,105);c.c.quadraticCurveTo(220,150,190,350);c.c.quadraticCurveTo(0,425,-190,350)},color,outline,24);
    // chest light
    path(ctx,c=>{c.moveTo(-118,183);c.c.quadraticCurveTo(0,135,118,183);c.c.quadraticCurveTo(100,328,0,345);c.c.quadraticCurveTo(-100,328,-118,183)},"rgba(255,255,255,.10)",null);
    // ears
    ellipse(ctx,-186,-70,57,72,color,outline,22);ellipse(ctx,186,-70,57,72,color,outline,22);
    ellipse(ctx,-186,-70,25,39,"#a77c83",null);ellipse(ctx,186,-70,25,39,"#a77c83",null);
    // head
    ellipse(ctx,0,-55,204,218,color,outline,25);
    // face mask
    path(ctx,c=>{c.moveTo(-156,-67);c.c.quadraticCurveTo(-112,-133,0,-113);c.c.quadraticCurveTo(112,-133,156,-67);c.c.quadraticCurveTo(145,45,0,105);c.c.quadraticCurveTo(-145,45,-156,-67)},"#d7a2a0",outline,18);
    // eyes
    ellipse(ctx,-72,-58,37,44,"#fff",outline,11);ellipse(ctx,72,-58,37,44,"#fff",outline,11);
    ellipse(ctx,-67,-55,13,21,"#25202a",null);ellipse(ctx,77,-55,13,21,"#25202a",null);
    ellipse(ctx,-72,-73,8,10,"#fff",null);ellipse(ctx,72,-73,8,10,"#fff",null);
    // muzzle
    ellipse(ctx,0,32,88,58,"#c78f91",outline,12);
    ellipse(ctx,0,3,32,20,"#31232a",outline,7);
    path(ctx,c=>{c.moveTo(0,20);c.c.lineTo(0,54);c.c.quadraticCurveTo(-23,75,-44,54);c.moveTo(0,54);c.c.quadraticCurveTo(23,75,44,54)},null,outline,9);
    // cheek shine
    ellipse(ctx,-126,15,17,9,"#f4c1b7",null,0,-.5);ellipse(ctx,126,15,17,9,"#f4c1b7",null,0,.5);
    ctx.restore();
  };

  C.mouth=(ctx,id)=>{
    ctx.save();
    switch(id){
      case "Werewolf Face":
        fur(ctx,0,40,1.05,"#4b414c");
        path(ctx,c=>{c.moveTo(-105,10);c.c.quadraticCurveTo(-70,-30,0,-5);c.c.quadraticCurveTo(70,-30,105,10);c.c.lineTo(74,78);c.c.quadraticCurveTo(0,119,-74,78);c.closePath()},"#4b2028","#17131a",13);
        ellipse(ctx,0,8,35,22,"#27232b","#17131a",8);
        path(ctx,c=>{c.moveTo(-68,28);c.c.lineTo(-48,77);c.c.lineTo(-28,35);c.moveTo(68,28);c.c.lineTo(48,77);c.c.lineTo(28,35)},"#fff0d6","#17131a",6);
        for(let i=-2;i<=2;i++) line(ctx,[[i*31,92],[i*31+10,112]],"#c5b5b1",5);
        break;
      case "Party Blower":
        ellipse(ctx,0,42,58,33,"#e84d78","#17131a",10);path(ctx,c=>{c.moveTo(40,40);c.c.lineTo(152,-28);c.c.lineTo(177,-17);c.c.lineTo(65,57);c.closePath()},"#ffd34e","#17131a",8);line(ctx,[[151,-28],[166,-47],[184,-36]],"#55d9ff",8);break;
      case "Rose":
        line(ctx,[[15,80],[38,-5]],"#3d9b62",13);ellipse(ctx,18,43,20,10,"#61bd75",null,0,-.5);
        for(let i=0;i<5;i++){ctx.save();ctx.translate(Math.cos(i*1.256)*22,Math.sin(i*1.256)*22-10);ellipse(ctx,0,0,21,16,i%2?"#e94b75":"#ff6c8d","#9f254b",5,i*.5);ctx.restore()}ellipse(ctx,0,-10,12,10,"#ffcc7a",null);break;
      case "Bubblegum":
        line(ctx,[[-20,28],[15,45]],"#17131a",8);ellipse(ctx,38,8,46,42,"#f6a6df","#17131a",10);ellipse(ctx,20,-5,12,9,"#fff",null);break;
      case "Shark Tooth":
        path(ctx,c=>{c.moveTo(-90,5);c.c.quadraticCurveTo(0,78,90,5);c.c.lineTo(90,33);c.c.quadraticCurveTo(0,102,-90,33);c.closePath()},"#452b36","#17131a",9);
        for(let i=-2;i<=2;i++)path(ctx,c=>{c.moveTo(i*30-13,20);c.c.lineTo(i*30,56);c.c.lineTo(i*30+13,20)},"#fff","#17131a",4);break;
      case "Happy Grin":
        path(ctx,c=>{c.moveTo(-95,4);c.c.quadraticCurveTo(0,105,95,4);c.c.quadraticCurveTo(0,68,-95,4)},"#532a36","#17131a",10);path(ctx,c=>{c.moveTo(-70,18);c.c.quadraticCurveTo(0,67,70,18)},"#fff","#17131a",5);ellipse(ctx,0,61,35,12,"#ec7d92",null);break;
      case "Shocked Mouth":
        ellipse(ctx,0,38,42,57,"#432632","#17131a",11);ellipse(ctx,0,54,19,15,"#e87591",null);break;
      case "Smirk":
        path(ctx,c=>{c.moveTo(-78,34);c.c.quadraticCurveTo(5,70,82,0);c.c.quadraticCurveTo(38,88,-78,34)},"#512c38","#17131a",9);line(ctx,[[-48,35],[45,42]],"#fff0dd",5);break;
      case "Fang Grin":
        path(ctx,c=>{c.moveTo(-94,4);c.c.quadraticCurveTo(0,95,94,4);c.c.lineTo(75,44);c.c.quadraticCurveTo(0,83,-75,44);c.closePath()},"#4a2632","#17131a",9);
        path(ctx,c=>{c.moveTo(-65,15);c.c.lineTo(-45,55);c.c.lineTo(-28,23);c.moveTo(65,15);c.c.lineTo(45,55);c.c.lineTo(28,23)},"#fff4dc","#17131a",5);break;
    }
    ctx.restore();
  };
  C.hand=(ctx,id,side)=>{
    const x=side==="left"?-305:305,y=438;ctx.save();ctx.translate(x,y);
    switch(id){
      case "Werewolf Claws":
        ellipse(ctx,0,0,61,48,"#39313c","#17131a",11);
        for(let i=0;i<4;i++){path(ctx,c=>{c.moveTo(-43+i*26,-18);c.c.quadraticCurveTo(-60+i*27,-53,-49+i*27,-67);c.c.lineTo(-24+i*27,-28)},"#4c414c","#17131a",6)}
        for(let i=0;i<4;i++)path(ctx,c=>{c.moveTo(-38+i*25,23);c.c.lineTo(-55+i*25,61);c.c.lineTo(-22+i*25,35)},"#f1e8dd","#17131a",5);break;
      case "Finger Painter Glove":ellipse(ctx,0,0,56,45,"#ffce35","#17131a",10);for(let i=0;i<4;i++)line(ctx,[[-33+i*22,-28],[-43+i*22,-65]],"#17131a",12);ellipse(ctx,23,12,13,11,"#ed4c72",null);break;
      case "Stick":line(ctx,[[-5,48],[10,-95]],"#a8794f",17);break;
      case "Golden Stick":line(ctx,[[-5,48],[10,-95]],"#f7c84b",20);line(ctx,[[-10,0],[10,-8]],"#fff0a8",5);break;
      case "Candy Cane":ctx.save();ctx.translate(0,-12);path(ctx,c=>{c.moveTo(-12,50);c.c.lineTo(-12,-33);c.c.quadraticCurveTo(-12,-75,30,-68);c.c.quadraticCurveTo(70,-62,42,-25)},"#fff","#17131a",12);for(let i=0;i<4;i++)line(ctx,[[-10,-25+i*22],[14,-12+i*22]],"#e94a5c",9);ctx.restore();break;
      case "Sparkler":line(ctx,[[0,50],[0,-44]],"#c5cbd4",12);for(let i=0;i<10;i++){let a=i*Math.PI/5;line(ctx,[[Math.cos(a)*17,-65+Math.sin(a)*17],[Math.cos(a)*45,-65+Math.sin(a)*45]],"#ffd45c",7)}ellipse(ctx,0,-65,12,12,"#fff3a1",null);break;
      case "Turkey Leg":line(ctx,[[-8,10],[22,47]],"#eee2d2",13);ellipse(ctx,0,-20,38,53,"#a9532e","#17131a",9,-.6);ellipse(ctx,-12,-48,20,22,"#d78b48",null);break;
    }
    ctx.restore();
  };
  C.hat=(ctx,id)=>{
    ctx.save();
    switch(id){
      case "Top Hat":path(ctx,c=>{c.moveTo(-115,-220);c.lineTo(-88,-390);c.lineTo(88,-390);c.lineTo(115,-220);c.closePath()}, "#292735","#17131a",15);ellipse(ctx,0,-222,139,24,"#17151d","#17131a",10);path(ctx,c=>{c.moveTo(-91,-274);c.lineTo(91,-274);c.lineTo(96,-300);c.lineTo(-96,-300)},"#d34b59","#17131a",7);break;
      case "Ushanka":ellipse(ctx,0,-245,150,91,"#805c45","#17131a",14);path(ctx,c=>{c.moveTo(-125,-254);c.lineTo(-158,-175);c.lineTo(-95,-160);c.lineTo(-70,-235);c.moveTo(125,-254);c.lineTo(158,-175);c.lineTo(95,-160);c.lineTo(70,-235)},"#9a7357","#17131a",12);ellipse(ctx,0,-313,75,38,"#b58a68","#17131a",9);break;
      case "Party Hat":path(ctx,c=>{c.moveTo(-110,-215);c.lineTo(0,-440);c.lineTo(110,-215);c.closePath()},"#ed5b91","#17131a",13);line(ctx,[[-70,-290],[70,-290]],"#ffdb55",12);ellipse(ctx,0,-440,15,15,"#ffe36e","#17131a",5);break;
      case "Cowboy Hat":ellipse(ctx,0,-230,170,35,"#b87a43","#17131a",13);path(ctx,c=>{c.moveTo(-100,-240);c.lineTo(-76,-325);c.quadraticCurveTo(0,-370,76,-325);c.lineTo(100,-240)},"#c68b50","#17131a",13);line(ctx,[[-90,-270],[90,-270]],"#57372c",10);break;
      case "Crown":path(ctx,c=>{c.moveTo(-120,-225);c.lineTo(-145,-345);c.lineTo(-60,-290);c.lineTo(0,-375);c.lineTo(60,-290);c.lineTo(145,-345);c.lineTo(120,-225);c.closePath()},"#f4c84f","#17131a",14);ellipse(ctx,0,-237,120,17,"#fff0a1",null);break;
      case "Sun Hat":ellipse(ctx,0,-240,185,35,"#d5a34f","#17131a",12);path(ctx,c=>{c.moveTo(-110,-245);c.lineTo(-72,-330);c.quadraticCurveTo(0,-370,72,-330);c.lineTo(110,-245)},"#e6bd72","#17131a",12);break;
      case "Headphones":ctx.strokeStyle="#333d55";ctx.lineWidth=26;ctx.beginPath();ctx.arc(0,-100,211,Math.PI,Math.PI*2);ctx.stroke();ellipse(ctx,-202,-105,31,55,"#6e91c8","#17131a",9);ellipse(ctx,202,-105,31,55,"#6e91c8","#17131a",9);break;
      case "Beanie":ellipse(ctx,0,-267,126,65,"#d85b67","#17131a",12);ellipse(ctx,0,-309,38,26,"#f1d5a4","#17131a",8);path(ctx,c=>{c.moveTo(-120,-255);c.quadraticCurveTo(0,-225,120,-255)},"#f08b90","#17131a",9);break;
      case "Witch Hat":path(ctx,c=>{c.moveTo(-145,-220);c.lineTo(-18,-440);c.quadraticCurveTo(12,-360,95,-330);c.lineTo(145,-220);c.closePath()},"#45345e","#17131a",14);ellipse(ctx,0,-222,155,26,"#30233e","#17131a",9);line(ctx,[[-65,-300],[70,-300]],"#d7a54c",11);break;
      case "Viking Helmet":path(ctx,c=>{c.moveTo(-135,-220);c.quadraticCurveTo(-130,-350,0,-360);c.quadraticCurveTo(130,-350,135,-220)},"#9da7b5","#17131a",14);path(ctx,c=>{c.moveTo(-110,-270);c.lineTo(-190,-365);c.lineTo(-145,-385);c.lineTo(-72,-300);c.moveTo(110,-270);c.lineTo(190,-365);c.lineTo(145,-385);c.lineTo(72,-300)},"#eee4ce","#17131a",12);line(ctx,[[-115,-250],[115,-250]],"#d8b85d",10);break;
      case "Fez":path(ctx,c=>{c.moveTo(-85,-225);c.lineTo(-70,-350);c.lineTo(70,-350);c.lineTo(85,-225);c.closePath()},"#b93345","#17131a",12);ellipse(ctx,0,-350,70,17,"#d75a61","#17131a",7);line(ctx,[[65,-345],[105,-280],[85,-265]],"#d5b16b",7);break;
    }
    ctx.restore();
  };
  C.face=(ctx,id)=>{
    ctx.save();
    switch(id){
      case "Shutter Shades":for(let side of [-1,1]){ctx.save();ctx.translate(side*75,-60);path(ctx,c=>{c.moveTo(-53,-35);c.lineTo(53,-35);c.lineTo(47,30);c.lineTo(-47,30);c.closePath()},"#f6c84f","#17131a",8);for(let i=-2;i<=2;i++)line(ctx,[[i*18,-30],[i*18,25]],"#5b4052",5);ctx.restore()}line(ctx,[[-23,-52],[23,-52]],"#17131a",9);break;
      case "Aviator Sunglasses":for(let s of [-1,1]){ctx.save();ctx.translate(s*72,-57);path(ctx,c=>{c.moveTo(-55,-30);c.quadraticCurveTo(0,-50,55,-30);c.lineTo(42,33);c.quadraticCurveTo(0,66,-42,33);c.closePath()},"#344d6b","#17131a",9);line(ctx,[[-35,-18],[35,18]],"#8ed5ff",5);ctx.restore()}line(ctx,[[-20,-60],[20,-60]],"#17131a",9);break;
      case "Monocle":ctx.beginPath();ctx.arc(72,-60,53,0,Math.PI*2);stroke(ctx,10,"#e5c77b");ctx.stroke();line(ctx,[[72,-8],[84,78]],"#e5c77b",6);break;
      case "VR Headset":path(ctx,c=>{c.moveTo(-150,-115);c.quadraticCurveTo(0,-155,150,-115);c.lineTo(130,-5);c.quadraticCurveTo(0,30,-130,-5);c.closePath()},"#303946","#11131a",14);ellipse(ctx,-65,-63,36,26,"#68b9f2","#11131a",7);ellipse(ctx,65,-63,36,26,"#68b9f2","#11131a",7);line(ctx,[[-115,-110],[115,-110]],"#8998a8",7);break;
      case "Bandage":ctx.save();ctx.rotate(-.35);path(ctx,c=>{c.moveTo(-100,-85);c.lineTo(100,-85);c.lineTo(100,-30);c.lineTo(-100,-30);c.closePath()},"#e8d7b9","#17131a",7);for(let x=-55;x<=55;x+=28)ellipse(ctx,x,-57,7,6,"#a98e7c",null);ctx.restore();break;
      case "Face Paint":line(ctx,[[-135,-5],[-88,-30],[-45,-5]],"#f04e67",13);line(ctx,[[135,-5],[88,-30],[45,-5]],"#f04e67",13);ellipse(ctx,0,-100,18,18,"#f4cf50",null);break;
      case "Heart Glasses":for(let s of [-1,1]){ctx.save();ctx.translate(s*72,-55);ctx.fillStyle="#f05a86";ctx.strokeStyle="#17131a";ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(0,35);ctx.bezierCurveTo(-75,-10,-50,-60,0,-24);ctx.bezierCurveTo(50,-60,75,-10,0,35);ctx.fill();ctx.stroke();ctx.restore()}line(ctx,[[-15,-55],[15,-55]],"#17131a",8);break;
      case "Cyclops Visor":path(ctx,c=>{c.moveTo(-135,-110);c.quadraticCurveTo(0,-150,135,-110);c.lineTo(115,-35);c.quadraticCurveTo(0,-5,-115,-35);c.closePath()},"#5bd5e8","#17131a",12);line(ctx,[[-92,-90],[92,-90]],"#d5ffff",8);break;
    }
    ctx.restore();
  };
  C.chest=(ctx,id)=>{
    ctx.save();
    switch(id){
      case "Moderator Stick Badge":ellipse(ctx,0,220,58,58,"#202b3e","#d8c27d",8);text(ctx,"MOD",0,220,22,"#f4d77d");break;
      case "Finger Painter Badge":ellipse(ctx,0,220,58,58,"#f6d14b","#17131a",8);text(ctx,"✦",0,220,42,"#e84e78");break;
      case "Early Access Badge":ellipse(ctx,0,220,58,58,"#8a70c8","#17131a",8);text(ctx,"EA",0,220,25);break;
      case "Bowtie":path(ctx,c=>{c.moveTo(-15,230);c.lineTo(-92,190);c.lineTo(-82,270);c.lineTo(-15,240);c.closePath()},"#e94c68","#17131a",9);path(ctx,c=>{c.moveTo(15,230);c.lineTo(92,190);c.lineTo(82,270);c.lineTo(15,240);c.closePath()},"#e94c68","#17131a",9);ellipse(ctx,0,232,17,17,"#f8d45d","#17131a",6);break;
      case "Scarf":path(ctx,c=>{c.moveTo(-125,118);c.quadraticCurveTo(0,165,125,118);c.lineTo(112,178);c.quadraticCurveTo(0,215,-112,178);c.closePath()},"#d54e59","#17131a",10);path(ctx,c=>{c.moveTo(80,165);c.lineTo(112,315);c.lineTo(55,325);c.lineTo(35,174);c.closePath()},"#d54e59","#17131a",9);break;
      case "Gold Chain":ctx.strokeStyle="#e8bf54";ctx.lineWidth=17;ctx.beginPath();ctx.arc(0,90,130,.15*Math.PI,.85*Math.PI);ctx.stroke();ellipse(ctx,0,220,24,31,"#f6d46b","#9e702d",7);break;
      case "Guitar":ctx.save();ctx.translate(0,235);ctx.rotate(-.35);ellipse(ctx,0,25,48,66,"#c77a43","#17131a",9);ellipse(ctx,0,-28,38,43,"#d99755","#17131a",8);path(ctx,c=>{c.moveTo(-12,-50);c.lineTo(-8,-195);c.lineTo(8,-195);c.lineTo(12,-50)},"#b87b4b","#17131a",7);line(ctx,[[0,-188],[0,80]],"#f2e5cb",3);ellipse(ctx,0,20,14,14,"#402b26",null);ctx.restore();break;
    }
    ctx.restore();
  };
  C.background=(ctx,type,solid)=>{
    const g=ctx.createLinearGradient(0,0,1024,1024);
    if(type==="transparent")return;
    if(type==="solid"){ctx.fillStyle=solid;ctx.fillRect(0,0,1024,1024);return}
    if(type==="forest"){g.addColorStop(0,"#163b3a");g.addColorStop(.55,"#4a795c");g.addColorStop(1,"#172c2c");ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);ellipse(ctx,510,890,420,180,"#533b2e","#201d20",20);for(let i=0;i<9;i++){ellipse(ctx,80+i*115,190+(i%3)*55,100,170,i%2?"#285a45":"#347354",null)}}
    if(type==="caves"){g.addColorStop(0,"#121d4c");g.addColorStop(.6,"#30236a");g.addColorStop(1,"#101525");ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);for(let i=0;i<13;i++){let x=35+i*80;path(ctx,c=>{c.moveTo(x,0);c.c.lineTo(x+35,120+(i%4)*45);c.c.lineTo(x+65,0)},"#242e62","#5668c9",5)}for(let i=0;i<7;i++)ellipse(ctx,130+i*130,820-(i%3)*55,35,110,"#5de4ef","#9bf8ff",5,.3)}
    if(type==="canyons"){g.addColorStop(0,"#5d477c");g.addColorStop(.48,"#f49a6c");g.addColorStop(1,"#452c38");ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);ellipse(ctx,760,260,130,130,"#ffd18a",null);path(ctx,c=>{c.moveTo(0,610);c.c.lineTo(190,360);c.c.lineTo(350,640);c.c.lineTo(510,420);c.c.lineTo(720,700);c.c.lineTo(900,410);c.c.lineTo(1024,600);c.c.lineTo(1024,1024);c.c.lineTo(0,1024)},"#a9564b",null);path(ctx,c=>{c.moveTo(0,790);c.c.lineTo(250,580);c.c.lineTo(410,800);c.c.lineTo(640,560);c.c.lineTo(840,830);c.c.lineTo(1024,650);c.c.lineTo(1024,1024);c.c.lineTo(0,1024)},"#643d43",null)}
    if(type==="city"){g.addColorStop(0,"#172744");g.addColorStop(1,"#3b4d70");ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);for(let i=0;i<11;i++){let x=i*100-10,h=230+(i*73)%300;ctx.fillStyle=i%2?"#202b43":"#293954";ctx.fillRect(x,690-h,85,h+334);for(let y=710-h;y<990;y+=48)for(let xx=x+16;xx<x+75;xx+=30){ctx.fillStyle="#ffd887";ctx.fillRect(xx,y,10,16)}}}
    if(type==="clouds"){g.addColorStop(0,"#69b9ee");g.addColorStop(1,"#d6edff");ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);for(let i=0;i<8;i++){let x=(i*157)%1050,y=130+(i%4)*150;ellipse(ctx,x,y,115,48,"#fff",null);ellipse(ctx,x-55,y+12,65,39,"#fff",null);ellipse(ctx,x+58,y+12,70,42,"#fff",null)}}
    if(type==="neon"){ctx.fillStyle="#090c1b";ctx.fillRect(0,0,1024,1024);ctx.save();ctx.shadowColor="#7e56ff";ctx.shadowBlur=50;ctx.strokeStyle="#8b63ff";ctx.lineWidth=28;ctx.beginPath();ctx.arc(512,512,410,0,Math.PI*2);ctx.stroke();ctx.shadowColor="#40e5ff";ctx.strokeStyle="#40e5ff";ctx.lineWidth=7;ctx.beginPath();ctx.arc(512,512,370,0,Math.PI*2);ctx.stroke();ctx.restore()}
  };
})();