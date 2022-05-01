import { useEffect, useRef } from "react";

function Canvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    const maxWidth = 150;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    class Element {
      constructor(img, width, height, x, y, dx, dy) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.minWidth = this.width;
      }

      draw = function () {
        c.drawImage(this.img, this.x, this.y, this.width, this.height);
      };

      update = function () {
        this.draw();

        if (this.x + this.width > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.height > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
      };
    }

    let images = document.querySelectorAll(".skill-logo");
    let arrayElements = [];

    function init() {
      arrayElements = [];

      for (let i = 0; i < images.length; i++) {
        var img = images[i];
        let width = canvas.width / 8;
        let height = canvas.height / 6;
        let x = Math.random() * (canvas.width - width * 2) + width;
        let y = Math.random() * (canvas.height - height * 2) + height;
        let dx = (Math.random() - 0.5) * 0.8;
        let dy = (Math.random() - 0.5) * 0.8;
        arrayElements.push(new Element(img, width, height, x, y, dx, dy));
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      c.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].update();
      }
    }

    init();
    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default Canvas;
