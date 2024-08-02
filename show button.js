document.getElementById('show-info-btn').addEventListener('click', function() {
    var infoBlock = document.getElementById('info-block');
    if (infoBlock.style.display === 'none') {
      infoBlock.style.display = 'block';
    } else {
      infoBlock.style.display = 'none';
    }
  });