# Homepage Transformation
$("./body") {
  add_class("_pdp")

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
      $(".//*[@id='ProductDetails']"){
      %tmp = this() 
        $(".//h2"){ 
          add_class("_newTitle")
          move(this(), %tmp, position("before"))
          }
        }
      $(".//*[@id='SimilarProductsByCustomerViews']") {add_class("_hidden")}
      $(".//*[@id='ProductReviews']") {add_class("_hidden")}
      $(".//*[@id='ProductVendorsOtherProducts']") {add_class("_hidden")}
      $(".//*[@id='ProductByCategory']") {add_class("_hidden")}
     $(".//*[contains(@class, 'Breadcrumb')]"){        
         $(".//li[last()]"){ remove()}   

        }

    }// _contentBlock
   }// header
   

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
