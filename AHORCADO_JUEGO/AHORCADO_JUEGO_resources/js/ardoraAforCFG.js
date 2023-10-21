//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=250; timeIni=250; timeBon=6;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=40; scoreInc=5; scoreDec=2;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#37B9C8"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FFFF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="QUE BUEN TRABAKI"; messageTime="TE QUEDA POCO TIEMPO"; messageError="ERRORRRRRRRRR"; messageErrorG="ERRORRRRRRRRR"; messageAttempts="SIGUE INTENTANDO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#FF0080"; borderTime="#00FF00";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUhPUkNBRE9fSlVFR08="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QklPTE9HSUE=","VEVDTk9MT0dJQQ==","RUNPU0lTVEVNQQ==","RUxUQUNUTw==","TEFNRU5TVFJVQUNJT04=","U0lTVEVNQU5FUlZJT1NP","RURVQ0FDSU9O","TEFWSVNUQQ==","",""];imaW=["0_0_biologia.jpg","0_0_Cu__l-fue-la-evoluci__n-de-la-tecnolog__a.jpg","0_0_ecosistema.jpg","0_0_el_tacto.jpg","0_0_mentruacion.jpg","0_0_sistema_nervioso.jpg","0_educacion.jpg","0_la_vista.jpg","",""];queW=["Ciencia que trata de los seres vivos considerando su estructura, funcionamiento, evolución, distribución y relaciones.","nace con el primer instrumento que el hombre utilizó para satisfacer sus necesidades por lo que su evolución sigue paralela al desarrollo del propio hombre.","conjunto de especies de un área determinada que interactúan entre ellas y con su ambiente abiótico","s uno de los sentidos humanos, compartido con otros animales superiores. Permite percibir las cualidades de los objetos y medios, tales como la textura, presión, temperatura y dureza. ","es una serie mensual de cambios que ocurren en el cuerpo en preparación para el embarazo. Cada mes, uno de los ovarios libera un óvulo. Esto se llama ovulación. Los cambios hormonales de esta etapa preparan al útero para el embarazo.","transmite señales entre el cerebro y el resto del cuerpo, incluidos los órganos internos.","Formación destinada a desarrollar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen.","es el sentido que permite, a través de la luz, percibir cuerpos con los ojos. Se trata de uno de los cinco sentidos del ser humano ","",""];var wordsL=[8,10,10,7,14,15,9,7,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="AHORCADO_JUEGO_resources/media/"; textBNext="SIGUIENTE";
