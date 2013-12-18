# Footer 
$("./body") {
  $("./div[@data-template][last()]") {
    # Here we are using the footer template
    # We are filling it in with placeholders
    # But you will probably change those placeholders to merge in your 
    # content with the merge() function
    # see the README.md to learn more
    template("_footer", "footer", "after") {
      placeholder(".//div[@class='_info']", "Mobile Site Powered By Moovweb")
      placeholder(".//div[@class='_copyright']", "Copyright © 2013")
    }
  }
}
