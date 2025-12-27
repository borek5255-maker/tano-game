export default function handler(req, res) {
  let player = { name: "Bohater", level:1, exp:0, gold:0, hp:120, str:8, dex:3, stamina:10 };
  const monster = { name:"Wilk", hp:30, str:4, def:1, exp:10, gold:5 };

  function fight(p,m){ let ph=p.hp,mh=m.hp; while(ph>0 && mh>0){ mh-=Math.max(1,p.str-m.def); if(mh<=0) break; ph-=Math.max(1,m.str-p.dex); } return ph>0; }

  if(player.stamina<=0){ res.status(200).json({error:"Brak staminy"}); return; }
  player.stamina--;
  const win = fight(player, monster);
  if(win){ player.exp+=monster.exp; player.gold+=monster.gold; }

  res.status(200).json({ monster: monster.name, win, player });
}
