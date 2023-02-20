let portal = document.getElementById("portal");

for (let i = 0; i < 360; i++) {
    let spark = document.createElement("div");
    spark.className = "spark";
    spark.style.rotate = i * 2 + 'deg';

    let sparkTranslation = Math.random() * (120 - 100) + 100;
    spark.style.transform = 'translate('+sparkTranslation+'px)';
    
    portal.appendChild(spark);
}
