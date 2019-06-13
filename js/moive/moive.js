window.onload=function()
{
   var top=document.getElementById("top-p");
   var ing=document.getElementById("ing-i");
   var hot=document.getElementById("hot");
   var reing=document.getElementById("ing");

   ing.onclick=function()
   {
     reing.style.display="block";
     hot.style.display="none";
     ing.style.color="#ef4238";
     ing.style.borderBottom="1px solid #ef4238";
     top.style.color="#666";
     top.style.borderBottom="none";
   }
   top.onclick=function()
   {
    reing.style.display="none";
    hot.style.display="block";
     top.style.color="#ef4238";
     top.style.borderBottom="1px solid #ef4238";
     ing.style.color="#666";
     ing.style.borderBottom="none";
   }
}