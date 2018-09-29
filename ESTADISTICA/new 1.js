function leerNatalidad() {
    NatalidadTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
	
    for (i=1;i<50;i++) {
	  Fecha =  NatalidadTR[i].children[0].textContent;
      NacHom = NatalidadTR[i].children[2].textContent;
      NacMuj = NatalidadTR[i].children[3].textContent;
      IndFec=NatalidadTR[i].children[5].textContent.replace(',','.');
	  
	  str += "[" + "'" + Fecha + "'";
      str += ","+ NacHom;
	  str += ","+ NacMuj;
	  str += ","+ IndFec+"]";
	  str += ",";
	  
	 
	  
	 
      str += "\n"
	  }
    
    str += "[,,]]";
    return str;
}


