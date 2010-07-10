// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
          $("#railspic").rotate(-20);

          $(".rimg").bind('mouseover',function(){
                $(this).rotateAnimation(0);
          });

          $(".rimg").bind('mouseout',function(){
                $(this).rotateAnimation(-20);
          });

        });
