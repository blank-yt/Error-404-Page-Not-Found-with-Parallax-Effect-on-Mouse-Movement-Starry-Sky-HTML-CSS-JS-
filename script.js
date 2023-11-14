window.onload = () => {
  const elements = document.querySelectorAll('.heading, .sub1, .sub2');
  elements.forEach(element => {
    element.style.opacity = 0.8;
  });

  const starCount = Math.ceil(300 + Math.random() * 300);
  const portHeight = window.innerHeight;
  const portWidth = window.innerWidth;

  for (let n = starCount; n > 0; n--) {
    const star = document.createElement('span');
    star.className = `stars star${n}`;

    let hue = Math.ceil(Math.random() * 90);
    if (hue > 60) {
      hue = Math.ceil(180 + Math.random() * 45);
    }

    const starColor = `hsl(${hue}, 100%, 95%)`;
    const starOpacity = Math.random() + 0.5;
    const xPosition = Math.ceil(Math.random() * portWidth);
    const yPosition = Math.ceil(Math.random() * portHeight);
    let starSize;

    if (n > starCount * 0.1) {
      starSize = Math.ceil(Math.random() * 2);
    } else {
      starSize = Math.ceil(Math.random() * 5);
    }

    star.style.background = starColor;
    star.style.borderRadius = "50%";
    star.style.boxShadow = `0 0 10px 1px ${starColor}`;
    star.style.opacity = starOpacity;
    star.style.position = "absolute";
    star.style.left = xPosition + 'px';
    star.style.top = yPosition + 'px';
    star.style.height = starSize + 'px';
    star.style.width = starSize + 'px';

    document.body.appendChild(star);
  }

  document.addEventListener('mousemove', event => {
    const stars = document.querySelectorAll('.stars');
    stars.forEach(star => {
      star.style.transform = `translate(-${100 * (event.pageX / (portWidth / 5))}%, -${100 * (event.pageY / (portHeight / 5))}%)`;
    });
  });
}