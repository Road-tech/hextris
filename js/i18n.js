var i18n = {
    currentLang: 'en',
    languages: {
        en: {
            name: 'English',
            'HIGH SCORE': 'HIGH SCORE',
            'GAME OVER': 'GAME OVER',
            'HIGH SCORES': 'HIGH SCORES',
            'HOW TO PLAY': 'HOW TO PLAY',
            'instructions': "<p>The goal of Hextris is to stop blocks from leaving the inside of the outer gray hexagon.</p><p>{arrowHint} to rotate the Hexagon.{speedHint}</p><p>Clear blocks and get points by making 3 or more blocks of the same color touch.</p><p>Time left before your combo streak disappears is indicated by <span style='color:#f1c40f;'>the</span> <span style='color:#e74c3c'>colored</span> <span style='color:#3498db'>lines</span> <span style='color:#2ecc71'>on</span> the outer hexagon</p>"
        },
        zh: {
            name: '中文',
            'HIGH SCORE': '最高分',
            'GAME OVER': '游戏结束',
            'HIGH SCORES': '排行榜',
            'HOW TO PLAY': '游戏说明',
            'instructions': "<p>目标是阻止方块离开灰色六边形区域。</p><p>{arrowHint}旋转六边形。{speedHint}</p><p>让3个或更多相同颜色的方块相邻即可消除得分。</p><p>连击剩余时间由六边形外圈的<span style='color:#f1c40f;'>彩</span><span style='color:#e74c3c'>色</span><span style='color:#3498db'>线</span><span style='color:#2ecc71'>条</span>表示</p>"
        }
    },
    t: function(key) {
        var lang = this.currentLang;
        if (this.languages[lang] && this.languages[lang][key]) {
            return this.languages[lang][key];
        }
        return key;
    },
    setLang: function(lang) {
        if (this.languages[lang]) {
            this.currentLang = lang;
            localStorage.setItem('hextris-lang', lang);
            this.updateUI();
        }
    },
    toggleLang: function() {
        if (this.currentLang === 'en') {
            this.setLang('zh');
        } else {
            this.setLang('en');
        }
    },
    updateUI: function() {
        $('#HIGHSCORE').text(this.t('HIGH SCORE'));
        $('#highScoreInGameTextHeader').text(this.t('HIGH SCORE'));
        $('#gameOverBox').text(this.t('GAME OVER'));
        $('#highScoresTitle').text(this.t('HIGH SCORES'));
        $('#langBtn').text(this.languages[this.currentLang].name);
        
        if ($('#instructions_head').length > 0) {
            var arrowHint = settings.platform != 'mobile' ? 
                (this.currentLang === 'zh' ? '按左右方向键' : 'Press the right and left arrow keys') : 
                (this.currentLang === 'zh' ? '点击屏幕左右两侧' : 'Tap the left and right sides of the screen');
            var speedHint = settings.platform != 'mobile' ? 
                (this.currentLang === 'zh' ? '按向下方向键加速下落' : ' Press the down arrow to speed up the block falling') : '';
            
            var instructions = this.t('instructions')
                .replace('{arrowHint}', arrowHint)
                .replace('{speedHint}', speedHint);
            
            $('#inst_main_body').html("<div id = 'instructions_head'>" + this.t('HOW TO PLAY') + "</div>" + instructions);
        }
    }
};

$(document).ready(function() {
    var savedLang = localStorage.getItem('hextris-lang');
    if (savedLang && i18n.languages[savedLang]) {
        i18n.currentLang = savedLang;
    } else {
        var browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.indexOf('zh') !== -1) {
            i18n.currentLang = 'zh';
        }
    }
    i18n.updateUI();
});