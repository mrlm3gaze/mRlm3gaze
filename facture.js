$( document ).ready(function() {
    $(".okey").click(function(){
        $('#err').fadeOut(500);
    });
 });

	var   //montan d'operation
	        mt=document.getElementById('mt'),
	        //remise and net 1
	        remise1=document.getElementById('remise1'),
	        remise1dh=document.getElementById('remise1dh'),
	        netcom1=document.getElementById('netcom1'),
	        //remise and net com 2
	        remise2=document.getElementById('remise2'),
	        remise2dh=document.getElementById('remise2dh'),
	        netcom2=document.getElementById('netcom2'),
	        //escompte
	        escompte=document.getElementById('escompte'),
	        escomptedh=document.getElementById('escomptedh'),
	        //netfin
	        netfin=document.getElementById('netfin'),
	        //TVA
	        tva=document.getElementById('tva'),
	        tvadh=document.getElementById('tvadh'),
	        //sold 
	        sold1=document.getElementById('sold1'),
	        sold2=document.getElementById('sold2'),
	        //transport
	        port=document.getElementById('port'),
	        tvaport=document.getElementById('tvaPort'),
	        tvaportdh=document.getElementById('tvaPortdh'),
	        //emballage
	        emballage=document.getElementById('emballage'),
	        //sold TTC
	        ttc=document.getElementById('ttc'),
	        
	        //error
	        err=document.getElementById('err'),
	        errp=document.getElementById('errp');
	         //ecrir
	     
	//function de remise 
	function remise(){ // mt brut
	    'use strict'
	   
	    //remise 1
	   if(mt.value =='' ){
	        err.style.display="none";
	        remise1dh.value='';
	        remise1.value='';
	        netcom1.value='';
	        netcom2.value='';
	        remise2.value='';
	        remise2dh.value='';
	        escompte.value='';
	        escomptedh.value='';
	        netfin.value='';
	        tva.value='';
	        tvadh.value='';
	        sold1.value="";
	        sold2.value="";
	        port.value="";
			tvaport.value="";
			tvaportdh.value="";
	        emballage.value='';
	        ttc.value='';
	        return false;
	      
	    }
	    else if(mt.value > 0){
	        err.style.display="none";
	    }
	     if(isNaN(mt.value)){
	        err.style.display="block";
	        errp.innerHTML;
	        mt.value='';
	        remise1dh.value='';
	        remise1.value='';
	        netcom1.value='';
	        netcom2.value='';
	        remise2.value='';
	        remise2dh.value='';
	        escompte.value='';
	        escomptedh.value='';
	        netfin.value='';
	        tva.value='';
	        tvadh.value='';
	        sold1.value="";
	        sold2.value="";
	        port.value="";
			tvaport.value="";
			tvaportdh.value="";
	        emballage.value='';
	        ttc.value='';
	        return false;
	    }
	     else if(!isNaN(remise1.value)){
	        remise1dh.value = remise1.value * mt.value/100;
	        return mt.value;
	    }
	    else{
	        remise1.value = 0;
	        remise1dh.value = remise1.value;
	        return true;
	        
	    }
	    
	}
	//net comercial 1 and remise 2
	function netcom(){
	    'use strict'
	     //remoise 1 and net com 1   
	   if(remise1.value === 0){
	      netcom1.value= mt.value;
	      return mt.value;
	      
	  } else if(!isNaN(remise1.value )) {
	       netcom1.value= mt.value - remise1dh.value;
	  }
	    //remise 2 and net com 1
	    if(netcom1.value ==='' || isNaN(netcom1.value)){
	         remise2dh.value='';
	         remise2.value='';
	         netcom2.value='';
	         escompte.value='';
	         return false;
	       
	    }
	   
	    else if( !isNaN(remise2.value)){
	         remise2dh.value = remise2.value * netcom1.value/100;
	         return netcom1.value;
	        }
	        else{
	            remise2.value = 0;
	            remise2dh.value = remise2.value;
	            return true;

	        }
	  
	}
	//net comrcial 2
	function netCom(){
	    'use strict'
	        
	   if(remise2.value === 0){
	      netcom2.value=netcom1.value;
	      return netcom1.value;
	      
	  } else if(!isNaN(remise2.value)) {
	       netcom2.value= netcom1.value - remise2dh.value;
	    }
	  //escompte 
	   if(netcom2.value == 0 || netcom2.value =='' && netcom1.value ==0 ||netcom1.value =='') {
	        escomptedh.value='';
	        escompte.value='';
	        return false;
	      
	    }
	    else if(!isNaN(escompte.value)){
	        escomptedh.value = escompte.value * netcom2.value/100;
	        return netcom2.value;
	        
	    }
	    
	    else{
	        escompte.value = 0;
	        escomptedh.value = escompte.value;
	        return true;
	        
	    }  
	    
	}
	//escompte
	function esco(){
	    'use strict'
	    //escompte 
	   if(netcom2.value == 0 || netcom2.value =='' && netcom1.value ==0 ||netcom1.value =='') {
	        escomptedh.value='';
	        escompte.value='';
	        return false;
	      
	    }
	    else if(!isNaN(escompte.value)  ){
	        escomptedh.value = escompte.value * netcom2.value/100;
	        return netcom2.value;
	        
	    }
	    
	    else{
	        escompte.value = 0;
	        escomptedh.value = escompte.value;
	        return true;
	        
	    }
	}
	function netFn(){
	    'use strict'
	    //
	  if(escompte.value === 0 ||escompte.value === '' && netcom2.value == "" || netcom2.value == 0 ){
	      netfin.value=netcom1.value;
	      return netcom1.value;
	      //
	  }else if(escompte.value ===0 ||escompte.value === '' ) {
	       netfin.value=netcom2.value;
	      return netcom2.value;
	      
	    }
	             
	   if(escompte.value == 0){
	      netfin.value=netcom2.value;
	      return netcom2.value;
	      
	  } else if(!isNaN(escompte.value)) {
	       netfin.value= netcom2.value - escomptedh.value;
	      return escomptedh;
	      
	    } //is not NaN 
	      //net com 2!=0 && !=''
	    else if(!isNaN(escompte.value) && netcom2.value != "" || netcom2.value != 0 ) {
	       netfin.value= netcom2.value - escomptedh.value;
	        mt.value;
	      
	    }//net com 2==0 && ==""; 
	    else if(!isNaN(escompte.value ) && netcom2.value == "" || netcom2.value == 0 ) {
	       netfin.value= netcom1.value - escomptedh.value;
	        mt.value;
	        
	    }////net com 2==0 && ==""; and //net com 1 ==0 && =="";
	    else if(!isNaN(escompte.value ) && netcom2.value == "" || netcom2.value == 0 && netcom1.value == "" || netcom1.value == 0) {
	       netfin.value= mt.value - escomptedh.value;
	        return mt.value;
	    }
	    else{
	        netfin.value=netcom2.value;
	    }
	}
	function TVA(){
	    'use strict'
	     if(netfin.value == 0) {
	        tvadh.value='';
	        tva.value='';
	        return false;
	      
	    }
	    else if(!isNaN(tva.value )){
	        tvadh.value = tva.value * netfin.value/100;
	        return netfin.value;
	        
	    }else if(netfin.value ==0|| netfin.value ==""){
	        tvadh.value= tva.value * netcom2.value/100;
	        return netcom2.value;
	    }
	    
	    else{
	        tva.value = 0;
	        tvadh.value = tva.value;
	        return true;
	        
	    }
	     
	 
	 } 
	function soldPer() {
		'use strict'

	  	if (tva.value !='' && netfin.value!='') {
			  sold1.value=parseFloat(tvadh.value) + parseFloat(netfin.value);
			  return parseFloat(tvadh.value) + parseFloat(netfin.value);
			}
		
		}

	function tran(){
		if (port.value =='' || isNaN(port.value)) {
			port.value='';
			sold2.value='' && stop();
			tvaportdh.value='';
			tvaport.value='';
		}
		if (!isNaN(tvaport.value)) {
			tvaportdh.value=(tvaport.value / 100) * port.value; 
			return (tvaport.value / 100) * port.value; 

			}

	  }

	function soldScd() {
		if (isNaN(tvaport.value)) {
			tvaport.value="";
			tvaportdh.value="";
		}
		if (port.value !='' && tvaportdh.value !='' ) {
			sold2.value=parseFloat(port.value) + parseFloat(tvaportdh.value);
			return port.value;
		 }
	  }

	function soldTtc(){
	   'use strict'
	   if (sold1.value == '' && sold2.value == '0') {
	   		ttc.value = 0;
	    	return 0;

	   }
	    if (!isNaN(sold1.value) && sold2.value =='' ) {
	    	ttc.value =sold1.value;
	    	return sold1.value;
	    }
	    if (!isNaN(sold2.value) && sold1.value =='' ) {
	    	ttc.value =sold2.value;
	    	return sold2.value;
	    }
	    if(!isNaN(sold1.value)  && !isNaN(sold2.value)){
	        ttc.value =parseFloat(sold1.value) + parseFloat(sold2.value) ;
	        return parseFloat(sold1.value) + parseFloat(sold2.value);
	        
	    }
	}

	function embaLlage(){
	    if(isNaN(emballage.value) || emballage.value<= '0' || emballage.value ==""){ 
	           ttc.value =parseFloat(sold1.value) + parseFloat(sold2.value);
	            return parseFloat(sold1.value) + parseFloat(sold2.value);
	        } 
	     if(!isNaN(emballage.value)){
	          ttc.value=parseFloat(sold1.value) + parseFloat(sold2.value) + parseFloat(emballage.value);
	            return parseFloat(sold1.value) + parseFloat(sold2.value) + parseFloat(emballage.value);
	     }    
	    
	    }

 function clr() {
			mt.value="";
	        remise1dh.value='';
	        remise1.value='';
	        netcom1.value='';
	        netcom2.value='';
	        remise2.value='';
	        remise2dh.value='';
	        escompte.value='';
	        escomptedh.value='';
	        netfin.value='';
	        tva.value='';
	        tvadh.value='';
	        sold1.value="";
	        sold2.value="";
	        port.value="";
			tvaport.value="";
			tvaportdh.value="";
	        emballage.value='';
	        ttc.value='';
	        return false;
}
