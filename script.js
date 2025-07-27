function calculate() {
  const length = parseFloat(document.getElementById('length').value);
  const girth = parseFloat(document.getElementById('girth').value);
  const resultDiv = document.getElementById('result');
  const buyLink = document.getElementById('buyLink');
  const shareButtons = document.getElementById('shareButtons');

  if (isNaN(length) || isNaN(girth) || length <= 0 || girth <= 0) {
    resultDiv.textContent = '❌ กรุณากรอกข้อมูลให้ครบถ้วน';
    buyLink.style.display = 'none';
    shareButtons.style.display = 'none';
    return;
  }

  let size = '';
  let link = '#';

  if (girth < 4.5) {
    size = 'ไซส์ S (49mm)';
    link = 'https://s.shopee.co.th/1qRKeEVJ6C';
  } else if (girth < 5.0) {
    size = 'ไซส์ M (52mm)';
    link = 'https://s.shopee.co.th/5VKd1B23mM';
  } else if (girth < 5.5) {
    size = 'ไซส์ L (54mm)';
    link = 'https://s.shopee.co.th/5VKd1B23mM';
  } else {
    size = 'ไซส์ XL (56mm)';
    link = 'https://s.shopee.co.th/5VKd1B23mM';
  }

  resultDiv.textContent = '✅ ขนาดที่แนะนำ: ' + size;
  buyLink.href = link;
  buyLink.style.display = 'inline-block';
  shareButtons.style.display = 'block';
}

function shareResult(platform) {
  const length = encodeURIComponent(document.getElementById('length').value);
  const girth = encodeURIComponent(document.getElementById('girth').value);
  const result = encodeURIComponent(document.getElementById('result').textContent);
  const url = encodeURIComponent(window.location.href);

  let shareUrl = '';

  const text = `ผมใช้เว็บนี้คำนวณไซส์ถุงยาง: ${result} (ความยาว: ${length} นิ้ว, เส้นรอบวง: ${girth} นิ้ว) ลองดูนะ!`;

  if(platform === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
  } else if(platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  } else if(platform === 'line') {
    shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
  }

  window.open(shareUrl, '_blank', 'width=600,height=400');
}

document.querySelectorAll('.faq dt').forEach(dt => {
  dt.addEventListener('click', () => {
    dt.classList.toggle('active');
    const dd = dt.nextElementSibling;
    if(dd.style.display === 'block') {
      dd.style.display = 'none';
    } else {
      dd.style.display = 'block';
    }
  });
});

// แสดงวันที่อัปเดตล่าสุด
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('th-TH', {
  year: 'numeric', month: 'long', day: 'numeric'
});
