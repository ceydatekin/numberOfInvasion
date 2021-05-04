const startdiv = document.getElementById("start");
const stopdiv = document.getElementById("stop");
const btnstp = document.getElementById("#stop button");
const btn = document.querySelector("#start button");
const p = document.querySelector("#start p");
const scorediv = document.getElementById("score");
const killsdiv = document.getElementById("kills");
const canvas = document.getElementById("canvas");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d");
var n, a;
ctx.clearRect(0, 0, width, height);


canvas.addEventListener("mousemove", (e) => {
    if (playing) {
        var dx = e.pageX - player.x; //oyuncu konumundan fare konumu çıkarılarak oyuncuya x ekseninden uzaklık bulunur.
        var dy = e.pageY - player.y; //oyuncu konumundan fare konumu çıkarılarak oyuncuya y ekseninden uzaklık bulunur.
        var tetha = Math.atan2(dy, dx); //bulduğumuz uzaklık yardımıyla radyan cinsinden açı oluşturur.
        tetha = tetha * 180 / Math.PI; //radyan açısını dereceye çevirir.
        angle = tetha;
    }

});


canvas.addEventListener("click", (e) => {
    if (playing) {
        bullets.push(new Circle(player.x, player.y, e.pageX, e.pageY, 5, 'white', 5)); //her tıklanmada mermi oluşumunu sağlar.
    }

});

class Circle {
    constructor(bx, by, tx, ty, r, c, s) {
        this.bx = bx;
        this.by = by;
        this.tx = tx;
        this.ty = ty;
        this.x = bx;
        this.y = by;
        this.r = r;
        this.c = c;
        this.s = s; //speed hız
    }
    draw() { //mermilerimizi çizmek için kullanırız.
        ctx.fillStyle = this.c;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

    }
    drawi() { //düşmanlarımızı çizmek için kullanırız.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "hsl(" + Math.random() * 360 + ",40%,50%)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.strokeStyle = "#7986CB";
        ctx.font = "20px Arial";

        if (a == 2) {
            if (this.r < 15) {
                n = 2;
                ctx.strokeText(n, this.x - 5, this.y + 5);
            }
            if (this.r > 15 && this.r <= 20) {
                n = 4;
                ctx.strokeText(n, this.x - 5, this.y + 5);
            }
            if (this.r > 20 && this.r <= 25) {
                n = 8;
                ctx.strokeText(n, this.x - 5, this.y + 5);
            }
            if (this.r > 25 && this.r <= 30) {
                n = 16;
                ctx.strokeText(n, this.x - 12, this.y + 5);
            }
            if (this.r > 30 && this.r <= 35) {
                n = 32;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }
            if (this.r > 35 && this.r <= 40) {
                n = 64;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }
            if (this.r > 40 && this.r <= 45) {
                n = 128;
                ctx.strokeText(n, this.x - 16, this.y + 5);
            }
            if (this.r > 45 && this.r <= 50) {
                n = 256;
                ctx.strokeText(n, this.x - 15, this.y + 5);
            }

            if (this.r > 50 && this.r <= 55) {
                n = 512;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }

        }
        if (a == 4) {
            if (this.r < 15) {
                n = 4;
                ctx.strokeText(n, this.x - 5, this.y + 5);
            }
            if (this.r > 15 && this.r <= 20) {
                n = 8;
                ctx.strokeText(n, this.x - 5, this.y + 5);
            }
            if (this.r > 20 && this.r <= 25) {
                n = 16;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }
            if (this.r > 25 && this.r <= 30) {
                n = 32;
                ctx.strokeText(n, this.x - 12, this.y + 5);
            }
            if (this.r > 30 && this.r <= 35) {
                n = 64;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }
            if (this.r > 35 && this.r <= 40) {
                n = 128;
                ctx.strokeText(n, this.x - 16, this.y + 5);
            }
            if (this.r > 40 && this.r <= 45) {
                n = 256;
                ctx.strokeText(n, this.x - 15, this.y + 5);
            }
            if (this.r > 45 && this.r <= 50) {
                n = 512;
                ctx.strokeText(n, this.x - 15, this.y + 5);
            }

            if (this.r > 50 && this.r <= 55) {
                n = 1024;
                ctx.strokeText(n, this.x - 10, this.y + 5);
            }

        }

        ctx.closePath();

    }

    update() {
        var dx = this.tx - this.bx;
        var dy = this.ty - this.by;
        var hp = Math.sqrt(dx * dx + dy * dy);
        this.x += (dx / hp) * this.s;
        this.y += (dy / hp) * this.s;

    }

    remove() { //sayfadan çıkan mermi ve düşmanlarımızın listeden temizlenmesini sağlarız.
        if ((this.x < 0 || this.x > width) || (this.y < 0 || this.y > height)) {
            return true;
        }
        return false;
    }

}

class Player {
    constructor(x, y, r, c) { //yapıcı metotumuzla oyuncunun olması gereken x konumunu
        this.x = x; //oyuncunun olması gereken y konumunu
        this.y = y; //oyuncunun olması gereken yarıçapını r
        this.r = r; //oyuncunun olması gereken c ile rengi
        this.c = c;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y); //canva başlangıç konumu değiştirilir.
        ctx.rotate(angle * Math.PI / 180); //oyuncumuzun fare yardımıyla etrafında dönmesini sağlar.
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "#B2EBF2";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.strokeStyle = "#006064";
        ctx.font = "20px Arial";
        ctx.strokeText(a, -5, 5);
        ctx.fillStyle = this.c;
        ctx.fillRect(this.r, -4.5, 10, 12);
        ctx.closePath();
        ctx.restore();
    }


}

function addEnemy() {
    for (var i = enemies.length; i < maxenemy; i++) {
        var r = Math.random() * 30 + 20;
        var c = "hsl(" + Math.random() * 360 + ",0%,0%)";
        var s = .5 + ((50 - ((r / 50) * r)) / 100) * maxenemy;

        var x, y;
        if (Math.random < 5) {
            x = (Math.random() > .5) ? width : 0;
            y = Math.random() * height;
        } else {
            x = Math.random() * width;
            y = (Math.random() < .5) ? height : 0;
        }


        enemies.push(new Circle(x, y, player.x, player.y, r, c, s));
    }
}

function collision(x1, y1, r1, x2, y2, r2) { //daireler birbirine değdi mi?
    var dx = x1 - x2;
    var dy = y1 - y2;
    var hp = Math.sqrt((dx * dx) + (dy * dy));
    if (hp < (r1 + r2)) {
        return true;
    }
    return false;
}

function animate() { //Oyun Çalıştırılır.
    if (playing) {
        requestAnimationFrame(animate);

        ctx.fillStyle = "rgba(38,33,56,.18)";
        ctx.fillRect(0, 0, width, height);
        ctx.fill();

        enemies.forEach((enemy, e) => {
            bullets.forEach((bullet, b) => {
                if (collision(enemy.x, enemy.y, enemy.r, bullet.x, bullet.y, bullet.r)) {
                    if (enemy.r < 15) {
                        enemies.splice(e, 1);
                        score += 25;
                        kills += 1;
                        if (kills > 0 && kills % 5 === 0) {
                            maxenemy++;
                        }
                        addEnemy();
                    } else {
                        enemy.r -= 5;
                        score += 5;
                    }

                    bullets.splice(b, 1);

                }
            });

            if (collision(enemy.x, enemy.y, enemy.r, player.x, player.y, player.r)) {
                startdiv.classList.remove("hidden");
                btn.textContent = "TRY AGAIN";
                p.innerHTML = "GAME OVER <br/> Puan : " + score;
                playing = false;
            }

            if (enemy.remove()) {
                enemies.splice(e, 1);
                addEnemy();
            }
            enemy.update();
            enemy.drawi();
        });

        bullets.forEach((bullet, b) => {
            if (bullet.remove()) {
                bullets.splice(b, 1);
            }
            bullet.update();
            bullet.draw();
        });
        if (kills < 20) {
            a = 2;
        }
        if (kills > 20) {
            a = 4;
        }
        player.draw();
        scorediv.innerHTML = "SCORE : " + score;
        killsdiv.innerHTML = "ENEMY : " + kills;

    }
}

function stop() {
    startdiv.classList.remove("hidden");
    playing = false;
    btnstp.textContent = "TRY AGAIN";
    p.innerHTML = "GAME OVER <br/> Puan : " + score;

}

function init() {
    playing = true;
    kills = 0;
    score = 0;
    angle = 0;
    bullets = [];
    enemies = [];
    maxenemy = 2;
    startdiv.classList.add("hidden");

    player = new Player(width / 2, height / 2, 20, "#006064");
    addEnemy();
    animate();
}


var playing = false;
var player, angle, bullets, enemies, maxenemy, score, kills;