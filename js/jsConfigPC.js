function compatibilite1() {
    
    var select = document.getElementById("selectp");
	var choice = select.selectedIndex;
    var valeur = select.options[choice].value;
    
    if(valeur >0 && valeur<=105){
        document.getElementById("cm1").style.display = "inline";
        document.getElementById("cm2").style.display = "inline";
        document.getElementById("cm3").style.display = "inline";
        document.getElementById("cm4").style.display = "none";
        document.getElementById("cm5").style.display = "none";
        document.getElementById("cm6").style.display = "none";
        document.getElementById("cm7").style.display = "none";
        document.getElementById("cm8").style.display = "none";
    }
    else if(valeur >105 && valeur <=1010){
        document.getElementById("cm1").style.display = "none";
        document.getElementById("cm2").style.display = "none";
        document.getElementById("cm3").style.display = "none";
        document.getElementById("cm4").style.display = "inline";
        document.getElementById("cm5").style.display = "inline";
        document.getElementById("cm6").style.display = "none";
        document.getElementById("cm7").style.display = "none";
        document.getElementById("cm8").style.display = "none";
    }
    else if(valeur >1010 && valeur <=1015){
        document.getElementById("cm1").style.display = "none";
        document.getElementById("cm2").style.display = "none";
        document.getElementById("cm3").style.display = "none";
        document.getElementById("cm4").style.display = "none";
        document.getElementById("cm5").style.display = "none";
        document.getElementById("cm6").style.display = "inline";
        document.getElementById("cm7").style.display = "inline";
        document.getElementById("cm8").style.display = "inline";
    }
   else{
        document.getElementById("cm1").style.display = "inline";
        document.getElementById("cm2").style.display = "inline";
        document.getElementById("cm3").style.display = "inline";
        document.getElementById("cm4").style.display = "inline";
        document.getElementById("cm5").style.display = "inline";
        document.getElementById("cm6").style.display = "inline";
        document.getElementById("cm7").style.display = "inline";
        document.getElementById("cm8").style.display = "inline"; 
   }
}

function compatibilite2() {
    
    var select = document.getElementById("selectcm");
	var choice = select.selectedIndex;
    var valeur = select.options[choice].value;
    
     if(valeur >0 && valeur <=202){
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p2").style.display = "inline";
        document.getElementById("p3").style.display = "inline";
        document.getElementById("p4").style.display = "inline";
        document.getElementById("p5").style.display = "inline";
        document.getElementById("p6").style.display = "inline";
        document.getElementById("p7").style.display = "none";
        document.getElementById("p8").style.display = "none";
        document.getElementById("p9").style.display = "none";
        document.getElementById("p10").style.display = "none";
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "none";
        document.getElementById("p15").style.display = "none";
        document.getElementById("p16").style.display = "none";
        document.getElementById("p17").style.display = "none";
        document.getElementById("p18").style.display = "none";
    }
    else if(valeur >202 && valeur <=203){
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("p5").style.display = "none";
        document.getElementById("p6").style.display = "none";
        document.getElementById("p7").style.display = "inline";
        document.getElementById("p8").style.display = "inline";
        document.getElementById("p9").style.display = "inline";
        document.getElementById("p10").style.display = "inline";
        document.getElementById("p11").style.display = "inline";
        document.getElementById("p12").style.display = "inline";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "none";
        document.getElementById("p15").style.display = "none";
        document.getElementById("p16").style.display = "none";
        document.getElementById("p17").style.display = "none";
        document.getElementById("p18").style.display = "none";
    }
    else if(valeur>203 && valeur<=205){
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("p5").style.display = "none";
        document.getElementById("p6").style.display = "none";
        document.getElementById("p7").style.display = "none";
        document.getElementById("p8").style.display = "none";
        document.getElementById("p9").style.display = "none";
        document.getElementById("p10").style.display = "none";
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p13").style.display = "inline";
        document.getElementById("p14").style.display = "inline";
        document.getElementById("p15").style.display = "inline";
        document.getElementById("p16").style.display = "inline";
        document.getElementById("p17").style.display = "inline";
        document.getElementById("p18").style.display = "inline";
    }
    else{
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p2").style.display = "inline";
        document.getElementById("p3").style.display = "inline";
        document.getElementById("p4").style.display = "inline";
        document.getElementById("p5").style.display = "inline";
        document.getElementById("p6").style.display = "inline";
        document.getElementById("p7").style.display = "inline";
        document.getElementById("p8").style.display = "inline";
        document.getElementById("p9").style.display = "inline";
        document.getElementById("p10").style.display = "inline";
        document.getElementById("p11").style.display = "inline";
        document.getElementById("p12").style.display = "inline";
        document.getElementById("p13").style.display = "inline";
        document.getElementById("p14").style.display = "inline";
        document.getElementById("p15").style.display = "inline";
        document.getElementById("p16").style.display = "inline";
        document.getElementById("p17").style.display = "inline";
        document.getElementById("p18").style.display = "inline";
    }
}


function changep(val) {
    document.getElementById("101").style.display="none";
    document.getElementById("102").style.display="none";
    document.getElementById("103").style.display="none";
    document.getElementById("104").style.display="none";
    document.getElementById("105").style.display="none";
    document.getElementById("106").style.display="none";
    document.getElementById("107").style.display="none";
    document.getElementById("108").style.display="none";
    document.getElementById("109").style.display="none";
    document.getElementById("1010").style.display="none";
    document.getElementById("1011").style.display="none";
    document.getElementById("1012").style.display="none";
    document.getElementById("1013").style.display="none";
    document.getElementById("1014").style.display="none";
    document.getElementById("1015").style.display="none";
    
    document.getElementById(val).style.display="block";
  } 

function infop(val) {
    var selectElmt=document.getElementById("selectp");
    var valeurp=selectElmt.options[selectElmt.selectedIndex].label;
    var textp=selectElmt.options[selectElmt.selectedIndex].text;
    var infop=selectElmt.options[selectElmt.selectedIndex].title;
    
    document.getElementById("resultatp").value=valeurp+"\r\n" +infop; 
    
    document.getElementById(val).style.display="block";
}

function prixp(val) {
    var selectElmt=document.getElementById("selectp");
    var prixp=selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("prip").value=prixp +" €";
}


function changecm(val) {
    document.getElementById("201").style.display="none";
    document.getElementById("202").style.display="none";
    document.getElementById("203").style.display="none";
    document.getElementById("204").style.display="none";
    document.getElementById("205").style.display="none";
    
    document.getElementById(val).style.display="block";
  }                                           
function infocm(val) {
    var selectElmt=document.getElementById("selectcm");
    var valeurcm=selectElmt.options[selectElmt.selectedIndex].label;
    var textcm=selectElmt.options[selectElmt.selectedIndex].text;
    var infocm=selectElmt.options[selectElmt.selectedIndex].title;
    
    document.getElementById("resultatcm").value=valeurcm+"\r\n" +infocm; 
    
    document.getElementById(val).style.display="block";
}

function prixcm(val) {
    var selectElmt=document.getElementById("selectcm");
    var prixcm=selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("pricm").value=prixcm +" €";
}


function changeRAM(val) {
    document.getElementById("m1").style.display="none";
    document.getElementById("m2").style.display="none";
    document.getElementById("m3").style.display="none";
    document.getElementById("m4").style.display="none";
    document.getElementById("m5").style.display="none";
    document.getElementById("m6").style.display="none";
    document.getElementById("m7").style.display="none";
    document.getElementById("m8").style.display="none";
    document.getElementById("m9").style.display="none";
    document.getElementById("m10").style.display="none";
    document.getElementById("m11").style.display="none";
    document.getElementById("m12").style.display="none";
    document.getElementById("m13").style.display="none";
    document.getElementById("m14").style.display="none";
    document.getElementById("m15").style.display="none";
    
    document.getElementById(val).style.display="block";
  }

function infoRAM(val) {
    var selectElmt=document.getElementById("selectmem");
    var valeurmem=selectElmt.options[selectElmt.selectedIndex].label;
    var textmem=selectElmt.options[selectElmt.selectedIndex].text;
    var infomem=selectElmt.options[selectElmt.selectedIndex].title;
    
    document.getElementById("resultatmem").value=valeurmem+"\r\n" +infomem; 
    
    document.getElementById(val).style.display="block";
}

function prixRAM(val) {
    var selectElmt=document.getElementById("selectmem");
    var prixmem=selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("primem").value=prixmem +" €";
}


function changecg(val) {
    document.getElementById("cg1").style.display="none";
    document.getElementById("cg2").style.display="none";
    document.getElementById("cg3").style.display="none";
    document.getElementById("cg4").style.display="none";
    document.getElementById("cg5").style.display="none";
    
    document.getElementById(val).style.display="block";
  }

function infocg(val) {
    var selectElmt=document.getElementById("selectcg");
    var valeurcg=selectElmt.options[selectElmt.selectedIndex].label;
    var textcg=selectElmt.options[selectElmt.selectedIndex].text;
    var infocg=selectElmt.options[selectElmt.selectedIndex].title;
    
    document.getElementById("resultatcg").value=valeurcg+"\r\n" +infocg; 
    
    document.getElementById(val).style.display="block";
}

function prixcg(val) {
    var selectElmt=document.getElementById("selectcg");
    var prixcg=selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("pricg").value=prixcg +" €";
}


function changedd(val) {
    document.getElementById("dd1").style.display="none";
    document.getElementById("dd2").style.display="none";
    document.getElementById("dd3").style.display="none";
    document.getElementById("dd4").style.display="none";
    document.getElementById("dd5").style.display="none";
    document.getElementById("dd6").style.display="none";
    document.getElementById("dd7").style.display="none";
    document.getElementById("dd8").style.display="none";
    document.getElementById("dd9").style.display="none";
    document.getElementById("dd10").style.display="none";
    
    document.getElementById(val).style.display="block";
  }

function infodd(val) {
    var selectElmt=document.getElementById("selectdd");
    var valeurdd=selectElmt.options[selectElmt.selectedIndex].label;
    var textdd=selectElmt.options[selectElmt.selectedIndex].text;
    var infodd=selectElmt.options[selectElmt.selectedIndex].title;
    
    document.getElementById("resultatdd").value=valeurdd+"\r\n" +infodd; 
    
    document.getElementById(val).style.display="block";
}

function prixdd(val) {
    var selectElmt=document.getElementById("selectdd");
    var prixdd=selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("pridd").value=prixdd +" €";
}


function total(val) {
    var p = parseFloat(document.getElementById("prip").value);
    var cm= parseFloat(document.getElementById("pricm").value);
    var mem=parseFloat(document.getElementById("primem").value);
    var cg=parseFloat(document.getElementById("pricg").value);
    var dd=parseFloat(document.getElementById("pridd").value);
    
    var tt= p+cm+mem+cg+dd;

document.getElementById("pritotal").value=(Math.round(tt*100))/100 +" €";
}


function suppp() {
    document.getElementById("selectp").selectedIndex=0;
    document.getElementById("resultatp").value="";
    document.getElementById("prip").value="0";
    compatibilite1();
    compatibilite2();
    total();
    bouton();
}

function suppcm() {
    document.getElementById("selectcm").selectedIndex=0;
    document.getElementById("resultatcm").value="";
    document.getElementById("pricm").value="0";
    compatibilite2();
    compatibilite1();
    total();
    bouton();
}

function suppmem() {
    document.getElementById("selectmem").selectedIndex=0;
    document.getElementById("resultatmem").value="";
    document.getElementById("primem").value="0";
    total();
    bouton();
}

function suppcg() {
    document.getElementById("selectcg").selectedIndex=0;
    document.getElementById("resultatcg").value="";
    document.getElementById("pricg").value="0";
    total();
    bouton();
}

function suppdd() {
    document.getElementById("selectdd").selectedIndex=0;
    document.getElementById("resultatdd").value="";
    document.getElementById("pridd").value="0";
    total();
    bouton();
}


function bouton(){
   a = document.getElementById("selectp").selectedIndex;
   b = document.getElementById("selectcm").selectedIndex;
   c = document.getElementById("selectmem").selectedIndex;
   d = document.getElementById("selectcg").selectedIndex;
   e = document.getElementById("selectdd").selectedIndex;
    if (a==0 || b==0 || c==0 || d==0 || e==0){
    document.getElementById("btnval").style.background="red";
}
    else{
     document.getElementById("btnval").style.background="linear-gradient(#4E7B4D,#65B064)";   
    }
}


function pdf(){
   a = document.getElementById("selectp").selectedIndex;
   b = document.getElementById("selectcm").selectedIndex;
   c = document.getElementById("selectmem").selectedIndex;
   d = document.getElementById("selectcg").selectedIndex;
   e = document.getElementById("selectdd").selectedIndex;
	if (a==0 || b==0 || c==0 || d==0 || e==0){
    document.getElementById("btnval").style.background="red";
    alert("Veuillez vérifier la configuration et choisir un élément de chaques catégories");
    }
    
    else {
    document.getElementById("btnval").style.background="linear-gradient(#4E7B4D,#65B064)";
    var processeur = document.getElementById("resultatp").value;
    var cartemere = document.getElementById("resultatcm").value;
    var memoire = document.getElementById("resultatmem").value;
    var cartegraphique = document.getElementById("resultatcg").value;
    var disque = document.getElementById("resultatdd").value;
    var pprix = document.getElementById("prip").value;
    var cmprix = document.getElementById("pricm").value;
    var memprix = document.getElementById("primem").value;
    var cgprix = document.getElementById("pricg").value;
    var ddprix = document.getElementById("pridd").value;
    var totalprix = document.getElementById("pritotal").value;

    
var doc = new jsPDF("landscape"); 
    
doc.setFontSize(22);
doc.text(130, 15, 'Config PC');


doc.setFontSize(18);
doc.text(98, 25, 'Récapitulatif de votre configuration');
        
doc.setFontSize(14);
doc.setFontType("bold");
doc.text(10,42,"Processeur choisi :")        
       
doc.setFontSize(10);
doc.setFontType("normal");
doc.text(10, 50, processeur);
                           doc.setFontType("bold");
                           doc.setFontSize(12);
                           doc.text(262, 58, pprix);   
doc.setFontSize(14);
doc.setFontType("bold");
doc.text(10,68,"Carte Mère choisie :")   
        
doc.setFontSize(10);
doc.setFontType("normal");       
doc.text(10, 76, cartemere);
                           doc.setFontType("bold");
                           doc.setFontSize(12);
                           doc.text(262, 88, cmprix);
    
doc.setFontSize(14);
doc.setFontType("bold");
doc.text(10,98,"Mémoire choisie :")
 
 doc.setFontSize(10);
doc.setFontType("normal");       
doc.text(10, 106, memoire);
                           doc.setFontType("bold");
                           doc.setFontSize(12);
                           doc.text(262, 118, memprix); 
                           
doc.setFontSize(14);
doc.setFontType("bold");
doc.text(10,128,"Carte Graphique choisie :")
 
doc.setFontSize(10);
doc.setFontType("normal");       
doc.text(10, 136, cartegraphique);
                           doc.setFontType("bold");
                           doc.setFontSize(12);
                           doc.text(262, 148, cgprix); 
                           
doc.setFontSize(14);
doc.setFontType("bold");
doc.text(10,158,"Disque Dur choisi :")
 
doc.setFontSize(10);
doc.setFontType("normal");       
doc.text(10, 166, disque);
                           doc.setFontType("bold");
                           doc.setFontSize(12);
                           doc.text(262, 178, ddprix); 
  
doc.setLineWidth(1);
doc.line(285, 185, 230, 185);
        
doc.setFontSize(14);
doc.text(233,192, "TOTAL :");
        
doc.text(260,192, totalprix);

doc.setFontSize(10);        
doc.text(110,204, "Merci de votre visite et à bientôt sur notre site");
    
doc.save('Votre configuration.pdf');  
}
}
