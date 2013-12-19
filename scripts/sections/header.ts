# Header
$("./body") {
  # Here we are using the header template
  # We are filling it in with placeholders and a help button template
  # But you will probably change those placeholders to merge in your 
  # content with the merge() function
  # see the README.md to learn more
  template("_header", "_header", "top") {
   //placeholder(".//*[@class='_tabs_link _bar_gray1']", "")
     merge(".//div[contains(@class,'_bar_gray1')]",
            "/html/body/.//*[@id='TopMenu']/.//li/a")     
     merge(".//div[contains(@class,'_bar_gray2')]",
            "/html/body/.//*[@id='Wrapper']/.//*[contains(@class, 'Panel')][1]")
    placeholder(".//div[@class='_logo']", "iGadget")
    
    $(".//*[contains(@class, '_tabs_content')]"){
      template("_toggler", "_toggler_navigation", "bottom"){
        merge(".//div[contains(@class,'_bar_gray2')]",
            "/html/body/.//*[@id='Wrapper']/.//*[@id='SideCategoryList']/h2")
        merge(".//div[contains(@class,'_bar_gray1')]",
            "/html/body/.//*[@id='Wrapper']/.//*[@id='SideCategoryList']/.//a")
      }
       template("_toggler", "_toggler_navigation", "bottom"){
        merge(".//div[contains(@class,'_bar_gray2')]",
            "/html/body/.//*[@id='Wrapper']/.//*[@id='SideShopByBrand']/h2")
        merge(".//div[contains(@class,'_bar_gray1')]",
            "/html/body/.//*[@id='Wrapper']/.//*[@id='SideShopByBrand']/.//a")
      }
    }
    
    $("./header") {
      template("_help_btn", "_help_btn", "top")
    }
  }
  template("_help_mask", "_help_mask", "top"){
    $(".//h1"){text("ERIC B. & RAKIM")}
    $(".//li"){ remove("p")}
    $(".//li[1]/h2") { text("1. \"I came through the door\"")}
    $(".//li[2]/h2") { text("2. \"I said it before\"")}
    $(".//li[3]/h2") { text("3. \"I never let the mic magnetize me no more\"")}
    $(".//li[4]/h2") { text("4. \"But it's biting me, fighting me, inviting me to rhyme\"")}
  }
}