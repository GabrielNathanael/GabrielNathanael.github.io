// loader.js
const loadComponent = async (id, file) => {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(`❌ Gagal memuat ${file}:`, err);
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = `<div style="color:red; padding:1rem;">Gagal memuat komponen: <code>${file}</code></div>`;
    }
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('navbar', 'components/navbar.html'),
    loadComponent('beranda', 'components/beranda.html'),
    loadComponent('tentang', 'components/tentang.html'),
    loadComponent('projects', 'components/projects.html'),
    loadComponent('sertifikat', 'components/sertifikat.html'),
    loadComponent('kontak', 'components/kontak.html'),
    loadComponent('footer', 'components/footer.html')
  ]);
});
