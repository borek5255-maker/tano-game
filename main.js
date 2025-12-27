document.getElementById("fight").onclick = async () => {
  const r = await fetch("/api/fight");
  const data = await r.json();
  document.getElementById("out").textContent = JSON.stringify(data,null,2);
};
