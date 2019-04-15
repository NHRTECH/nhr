/*

Library : nhr ;
Version : 1.0 ;
Description : This is a very simple JavaScript library."nhr" is almost like jQuery.But there is a lot of diffrence between "nhr" & jQuery.
Such as "nhr" has a bundle of selectors for users."nhr" is a verry small sized library.So it'll nit waste user's storage.It's verry simple to use & learn ;
Selectors : "n(css_selector)","h(css_selector)","r(css_selector)","N(css_selector)","NHR(css_selector)","$(css_selector)" ;
URL : https://github.com/NHRTECH ;
Author : Nowshad Hossain Rahat ;
E-mail : nhrmine@gmail.com ;
Released : 08th April,2019 ;
First Released On : GitHub ;

*/



//This is the starting of my new JavaScript library same like jquery but a few functions.


	// <!--shorting the window.onload-->


var page = {};//page object


//window scroll event handler

window.onscroll = function(func){
	return func();
}

// page.scroll(functions);

page.scroll = window.onscroll;


page.scrollTo = function(param1,param2){

	window.scrollTo(param1,param2);

}

						//DO NOT MODIFY THIS CODES


		//<!-- STARTING OF THE n,h,r,$() FUNCTUON -->


function n(selector){	


	if(selector==page || selector==doc || selector==screen || selector==document){
			
		//when the window loaded

		window.onload = function(func){
			return func();
		}

		page.ready = window.onload;
		
		
		//to create element node
		
		page.elNode = function(tag_name){
			return document.createElement(tag_name);
		}

		//to create text node
		
		page.txtNode = function(tag_name){
			return document.createTextNode(tag_name);
		}
	
		//to create comment node
		
		page.comNode = function(tag_name){
			return document.createCommentNode(tag_name);
		}
		
	
		return page;
			
	}else{
	
			//all the property will be stored in this "self" object
			
			var self = {}; //a new object is created;
			
			//selecting the element by id/class_name
			
			var el = document.querySelector(selector);
			
			//putting the "el"/selected element in the "self" object.
			
			self.el = el;
			
			//to remove a child from an element
			
			self.removeChild = function(tag_name){
				el.removeChild(tag_name);
			}
			
			//to replace a child node of an element
			
			self.replaceChild = function(tag1,tag2){
				el.replaceChild(tag1,tag2);
			}
							
			//to add free event listener
			
			self.on = function(event,func){
				el.addEventListener(event,func);
			}
			
			
			//to append child node
			
			self.append = function(element){
				el.appendChild(element);
			}
						
			
			//to insert before
			
			self.before = function(element){
				el.insertBefore(element);
			}
			
			
			//to ad click event
			
			self.click = function(func){
				
				if(func==null){
					el.click();
				}else{
					el.addEventListener("click",func);
				}
			}
		
			
			//to remove events
			
			self.remove = function(event,func){
				el.removeEventListener(event,func);
			}
			
		
			//to ad keyup event
			
			self.keyup = function(func){
				el.addEventListener("keyup",func);
			}
		
		
			//to ad blur event
			
			self.blur = function(func){
				el.addEventListener("blur",func);
			}
		
		
			//to ad focus event
			
			self.focus = function(func){
				el.addEventListener("focus",func);
			}
		
		
			//to ad change event
			
			self.change = function(func){
				el.addEventListener("change",func);
			}
		
			//to ad mouseover event
			
			self.mouseover = function(func){
				el.addEventListener("mouseover",func);
			}
		
		
			//to ad mouseout event
			
			self.mouseout = function(func){
				el.addEventListener("mouseout",func);
			}
		
		
			//to ad keydown event
			
			self.keydown = function(func){
				el.addEventListener("keydown",func);
			}
		
		
			//to ad doubleclick event
			
			self.dblclick = function(func){
				el.addEventListener("dblclick",func);
			}
		
		
		//to check if an element has a class name as given
		
		self.hasClass = function(className){
			var ans = el.classList.contains(className);
			return ans;
		}
		
		//to add a class
		
		self.addClass = function(className){
			if(self.hasClass(className)==false){
			el.classList.add(className);
			}
		}
		
		
		//to remove a class
		
		self.removeClass = function(className){
			if(self.hasClass(className)==true){
			el.classList.remove(className);
			}
		}
		
		
		//function of toggle a class of an element
		
		self.toggleClass = function(className){
		
				if(self.hasClass(className)==false){
					el.classList.add(className);
				}else{
					el.classList.remove(className);
				}
			
		}
		
		
		//to set and get inner text
		
		self.text = function(text){
			if(text==null){
				var elTxt = innerHTML;
				var txt = elTxt.replace("<","");
				var txt1 = txt.replace("]","");
				var txt2 = txt1.replace("[","");
				var txt3 = txt2.replace("/","");
				var txt4 = txt3.replace("</div>","");
				var txt5 = txt4.replace("[]","");
				return txt5;
			}else{
				el.innerText = text;
			}
		}
		
		
		
		//to cgange inner html
		
		self.html = function(html){
			el.innerHTML = html;
		}
		
		
		
		//on focus in event
		
		self.focus = function(func){
			el.addEventListener("focusin",func);
		}
		
		
		//to add css style(s)
		
		self.css = function(css){
			
		if(css!=""){
			
		css1 =	css.replace(" ","");
		
		css2 = css1.replace(".",";");
		
		css3 = css2.replace("=",":");
			
		el.setAttribute("style",css3);
		
		}else{
			alert("You must give a css value!");
		}
			
		}
		
		
		//to add id to an element
		
		self.addId = function(idName){
			el.setAttribute("id",idName);
		}
		
		
		//to remove id from an element
		
		self.removeId = function(idName){
			el.removeAttribute("id",idName);
		}
		
		
		
		//to add name to an element
		
		self.addName = function(name){
			el.setAttribute("name",name);
		}
		
		
		//to remove name from an element
		
		self.removeName = function(name){
			el.removeAttribute("name",name);
		}
		
		
		//to fade in
		
		self.fadeIn = function(speed){
		
			if(speed=="slow"){
				el.style.transition = "1s";
				el.style.opacity = 0;
				el.style.visibility = "hidden";
			}
			else if(speed=="medium"){
				el.style.transition = "0.5s";
				el.style.opacity = 0;
				el.style.visibility = "hidden";
			}
			else if(speed=="fast"){
				el.style.transition = "0.000000001s";
				el.style.opacity = 0;
				el.style.visibility = "hidden";
			}
			else if(speed==""){
				alert("You must specify the speed!");
			}
			else{
				el.style.transition = speed+"s";
				el.style.opacity = 0;
				el.style.visibility = "hidden";
			}
		
		}
		
		
		//to fade Out
		
		self.fadeOut = function(speed){
		
			if(speed=="slow"){
				el.style.transition = "1s";
				el.style.opacity = 1;
				el.style.visibility = "visible";
			}
			else if(speed=="medium"){
				el.style.transition = "0.5s";
				el.style.opacity = 1;
				el.style.visibility = "visible";
			}
			else if(speed=="fast"){
				el.style.transition = "0.000000001s";
				el.style.opacity = 1;
				el.style.visibility = "visible";
			}
			else if(speed==""){
				alert("You must specify the speed!");
			}
			else{
				el.style.transition = speed+"s";
				el.style.opacity = 1;
				el.style.visibility = "visible";
			}
			
		}
		
		
		
		//to fadeToggle
		
		self.fadeToggle = function(speed){
		
			if(faded==0){
				faded = faded+1;
				self.fadeIn(speed);
			}else{
				faded = faded-1;		
				self.fadeOut(speed);
			}
		
		}
		
		
		//to hide
		
		self.hide = function(){
			
			el.style.display = "none";
			
		}
		
		
		//to show
		
		self.show = function(){
			
			el.style.display = "block";
			
		}
		
		
		//to set and get the value
		
		self.val = function(txt){
			
			if(txt==null || txt==""){
				return el.value;
			}else{				
				el.value = txt;						
			}
		}
		
		//to set and get the value
		
		self.val = function(txt){
				return el.value;
		}
		
	
		//enable element
		
		self.enable = function(){
			el.disabled(false);
		}
		
		
		//disable element
		
		self.disable = function(){
			el.disabled(true);
		}
		
		
		//to set and get attribute
		
		self.attr = function(attrName,attrValue){
			
			if(attrValue==null && attrName!=null){
				var val = el.getAttribute(attrName);
				return val;
			}else{
				el.setAttribute(attrName,attrValue);
				var val =  el.getAttribute(attrName);
				return val;
			}
			
		}
		
		
		//to check if the value is null
		
		self.isNull = function(){
			var value = el.value;
			if(value==""){
				return true;
			}else{
				return false;
			}
		}
		
		
		//to count the total number of varter in the value of an element
		
		self.charNum = function(){
			var val = el.value;
			val = val.split("");
			var l = val.length;
			return l;
		}
		
		
		//to make an element editable
		
		self.editable = function(){
			el.contentEditable = "true";
		}
		
		
		//to make an element uneditable
		
		self.unEditable = function(){
			el.contentEditable = "false";
		}
		
		
		//to add source value
		
		self.src = function(src){
			el.src = src;
		}
		
		
		
		//to load data of a page
		
		self.load = function(url){
			
			var xhr = new XMLHttpRequest();
			
			xhr.open("GET",url,true);
			
			xhr.onreadystatechange = function(){
				
				if((xhr.readyState==4) && (xhr.status==200)){
					
					el.innerHTML = xhr.responseText;
					
				}
				
			}
			
			xhr.send(null);
			
		}
		
		
		
		
		//on input event
		
		self.input = function(func){
			el.addEventListener("input",func);
		}
		
		
		//to reset a form data
		
		self.reset = function(){
			el.reset();
		}
		
		
		//to get child nodes
		
		self.childs = function(tagName){
			return el.getElementsByTagName(tagName);
		
		}
		
		
		//el.inputs() mthod to get all the input values of a html form
		
		
		self.serialize = function(tagName){
			
			var tags = self.childs(tagName);
			
			var tagsArr = [];
			
			
			for(i=0;i<tags.length;i++){
								
				var value = tags[i].value;
								
				var name = tags[i].getAttribute("name");

				tagsArr.push(name+"="+value+"&");

			}
		
			
		var tagsArrStr = tagsArr.toString();
	var	tagsArrStrComLess = tagsArrStr.replace(/,/g,"");
		
		return tagsArrStrComLess;
			
		
	}
		
		
		
		
			
		return self;
		
	}


		
}



//<!-- STARTING OF THE NHR.POST/AJAX/GET -->





var nhr = {};

//Ajax nhr.post() method

nhr.post = function(page_url,informations,func){
	
	var xhr = new XMLHttpRequest();

	var allData = [];//array created

		
var info = function(){
	
	var INFO;
			
	if(typeof informations=="object"){
		
	for(var key in informations){
		allData.push(key+"="+informations[key]+"&");
	}
	
	var allData2 = allData.toString();
	
	// el.replace(/item_to_remove/g,"alternative_item");
	
	// "g" means global
	
	INFO = allData2.replace(/,/g,"");
		
	}else if(typeof informations=="string"){
		INFO = informations;
	}
	
	return INFO;

	}


xhr.open("POST",page_url,true);//opening url

xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  
xhr.onreadystatechange = function(){	
	
	if((xhr.readyState==4) && (xhr.status==200)){
		
			if(xhr.responseText!=null || xhr.responseText!=null){
				var data = xhr.responseText;
			}else{
				var data = "No data found!";
			}
		
		status = "success";
				
		return func(data,status);
		
	}else{
		
			if(xhr.responseText!=null){
				var data = xhr.responseText;
			}else{
				var data = "No data found!";
			}

		status = "failed";
		
		return func(data,status);
		
	}

}

xhr.send(info());//sending data
 
}//END nhr.post() ;



//Ajax nhr.get() method


nhr.get = function(page_url,func){
	
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET",page_url,false);//Opening the url given
	
	xhr.onreadystatechange = function(){
		
		if((xhr.readyState==4) && (xhr.status==200)){
			
			if(xhr.responseText!=null){
				var data = xhr.responseText;
			}else{
				var data = "No data found!";
			}
			
			//USERCAN ACCESS THIS STATUS FROM OUTSIDE
			var status = "success";

			//THIS WILL RETURN OR CALL THE FUNCTiON GIVEN BY THE USET
			return func(data,status);
						
		}else{
			
			var data = "There was a problem to get Data!!!";
			
			var status = "failed";
			
			//THIS WILL RETURN OR CALL THE FUNCTiON GIVEN BY THE USET
			return func(data,status);
		}
		
	}
	
	xhr.send(null);//Sending the data to the url given
	
}



//Ajax nhr.ajax() method

//Using this FUNCTiON user can have two facility lije get() method and post() method of ajax

nhr.ajax = function(informations){
	
	var xhr = new XMLHttpRequest();//creating new Ajax object
	
	var method = informations.method;//get or post
	
	var url = informations.url;//url of the page where data to be sent
	
	var async = informations.async;//true or false
	
	if(async==null || async==""){
		var bol = true;
	}else{
		var bol = async;
	}
	
	var info_arr = [];//declAring an array
	
	var info_replaced;
	
	var info = function(){
		
		if(typeof informations.data=="object"){

		var Info = informations.data;
		
		for(var key in Info){
			info_arr.push(key+"="+Info[key]+"&");
		}
		//tranforming the array to string
		var info_string = info_arr.toString();
		
		//Replacing those bloody commas
		info_replaced = info_string.replace(/,/g,"");
		

		}else if(typeof informations.data=="string"){
			info_replaced = informations.data;
		}
	
		return info_replaced;
		
}
	

	xhr.open(method,url,bol);
	
	if(method=="post"){
		
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		
	}
	
	xhr.onreadystatechange = function(){
		
		if((xhr.readyState==4) && (xhr.status==200)){
			
			if(xhr.responseText!=null){
				var data = xhr.responseText;
			}else{
				var data = "No data found!";
			}
						
			return informations.success(data);
			
		}else{
			
			var data = "error";
			
			return informations.error(data);
			
		}
		
	}
	
	if(method=="post"){
		xhr.send(info());
	}else{
		xhr.send(null);
	}
	
}


		//THESE ARE OURS SELECTOR FUNCTIONS AS VARIABLE


//User can use $(SELECTOR) 
var $ = n;
//User can use h(SELECTOR)
var h=n;
//User can use r(SELECTOR)
var r=n;
//User can use N(SELECTOR)
var N=n;
//Uset can use NHR(SELECTOR)
var NHR=n;
//User can use n(doc).ready();
var doc=page;
//User can use n(document).ready();
var document=page;
//User can use n(screen).ready();
var screen=page;


// 	<!-- ENDING OF THE JavaScript LIBRARY "nhr.js" -->
