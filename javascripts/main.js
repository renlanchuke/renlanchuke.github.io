/**************
���Ӷ���ϵͳ�����趨
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
          //������ɫ
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
              //���ӱ߿�
              "stroke": {
                  "width": 0,
                  "color": "#ff6a00"
              },
              //����shapeΪ����εı���
              "polygon": {
                  "nb_sides": 5
              },
              //����shapeΪimage��ͼ���ַ
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          //����͸����
          "opacity": {
              "value": 1,
              "random": false,
              //͸���Ƚ���
              "anim": {
                  "enable": true,
                  //�����ٶ�
                  "speed": 0.5,
                  "opacity_min": 0.1,
                  //����͸�����Ƿ�ͬ��
                  "sync": false
              }
          },
          //��С
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
          //����֮�������ı�
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
              //�Ƿ񵯳��߽�
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },

      //�û�����
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false,
                  //����ģʽ��grabץȡ�����λ������Χ����������repulse��ѹ�������Ӽ�����Χ��bubbleð�ݣ������Χ���ӱ��
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          //����ģʽ����
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