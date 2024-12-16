// 连接设备
function connectDevice(deviceName) {
  document.getElementById('status').innerText = `已连接到: ${deviceName}`;
}

// 模拟PK模式
function startPK() {
  const opponent = '对手';
  const selfSpeed = Math.floor(Math.random() * 100);
  const selfForce = Math.floor(Math.random() * 100);
  const selfCount = Math.floor(Math.random() * 100);

  document.getElementById('opponent').innerText = opponent;
  document.getElementById('self-speed').innerText = selfSpeed;
  document.getElementById('self-force').innerText = selfForce;
  document.getElementById('self-count').innerText = selfCount;
}
