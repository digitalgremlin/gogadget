# Homepage Transformation
$("./body") {
  add_class("_home")

  # Here we are using the placeholder carousel template
  # But you will probably change that template to a 
  # regular carousel, or just templates of your choice.
  # Then you'll use the merge() function to fill it in.
  # see the README.md to learn more

  $("./div[@id='footer']") {
    # Carousel placeholder template
    template("_placeholder_carousel", "_placeholder_carousel", "before"){
      $(".//*[@class='_title1']/.."){ add_class("_papers")}
      $(".//*[@class='_title2']/.."){ add_class("_rocks")}
      $(".//*[@class='_title3']/.."){ add_class("_scissors")}
    }
    
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
