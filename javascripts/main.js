/**************
粒子动画系统参数设定
***************/
particlesJS('particles-js',

  {
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          //粒子颜色
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
              //粒子边框
              "stroke": {
                  "width": 0,
                  "color": "#ff6a00"
              },
              //粒子shape为多变形的边数
              "polygon": {
                  "nb_sides": 5
              },
              //粒子shape为image的图像地址
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          //粒子透明度
          "opacity": {
              "value": 1,
              "random": false,
              //透明度渐变
              "anim": {
                  "enable": true,
                  //渐变速度
                  "speed": 0.5,
                  "opacity_min": 0.1,
                  //粒子透明度是否同步
                  "sync": false
              }
          },
          //大小
          "size": {
              "value": 6,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          //粒子之间相连的边
          "line_linked": {
              "enable": true,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
          },
          //
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": true,
              "straight": false,
              //是否弹出边界
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },

      //用户交互
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false,
                  //三种模式，grab抓取：鼠标位置与周围粒子相连，repulse挤压：将粒子挤向周围，bubble冒泡：鼠标周围粒子变大
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          //交互模式属性
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "particles_nb": 1
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true,
  }

);