# Header
$("./body") {
  # Here we are using the header template
  # We are filling it in with placeholders and a help button template
  # But you will probably change those placeholders to merge in your 
  # content with the merge() function
  # see the README.md to learn more
  template("_header", "_header", "top") {
    placeholder(".//*[@class='_tabs_link _bar_gray1']", "Category")
    placeholder(".//div[@class='_logo']", "Moovweb")
    $("./header") {
      template("_help_btn", "_help_btn", "top")
    }
  }
  template("_help_mask", "_help_mask", "top")
}