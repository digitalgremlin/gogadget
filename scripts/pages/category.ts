# Homepage Transformation
$("./body") {
  add_class("_category")

   $("./*[@id='_header']") {
    insert_after("div", id: "_contentBlock"){
      %space = this()
      add_class("Shazzam!")
      %name = fetch("./@class")
      %quote = "I am " + %name
      attribute("classquote", %quote)      
      $("//*[@id='Wrapper']/.//*[@class='Content ']|//*[@id='Wrapper']/.//*[@class='Content']"){         
        move(this(), %space, position("top"))
      }   
      $("./div/div[1]"){
        template("_toggler", "_toggler_subnavigation", "after"){
       $(".//*[contains(@class, '_bar_gray2')]"){
        name("h2")
        text("SubCategoryList")
        attribute("class", "_toggler_btn _bar_red2") 
       }
        merge(".//div[contains(@class,'_bar_gray1')]",
            "/html/body/.//*[@class='SubCategoryList']/.//a"){ attribute("class", "_bar_red1") }
      }
        move_here("//*[@id='CategoryHeading']/.//h2", position("after")){ add_class("_newTitle")}
      }
      $(".//*[contains(@class, 'Breadcrumb')]"){        
         $(".//li[last()]"){ remove()}   

        }
        $(".//*[@id='frmCompare']/.//li") { 
         attribute("class", "")
         
        } 
    }
   }
   

  $("./div[@id='footer']") {    
    
    # This template wraps all the existing content on the page
    # that you'll need to pick and choose from what you want to move
    # into your templates and what you want to remove.
    template("_existing_content", "existing_content", "after") {
      add_class("_hidden")
      merge(".//*[@class='_existing_content_containers']", "/html/body/div[@id='existing_content']/following-sibling::*")
      remove()
    }
  }
}
