document.addEventListener("DOMContentLoaded", () => {
  // Filter Section Drop Down
  document.querySelectorAll(".filter-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation()
      const dropdown = trigger.nextElementSibling
      console.log(dropdown)

      dropdown.classList.toggle("hidden")

      document.querySelectorAll(".filter-dropdown").forEach((d) => {
        if (d !== dropdown) d.classList.add("hidden")
      })
    })
  })

  document.addEventListener("click", () => {
    document.querySelectorAll(".filter-dropdown").forEach((d) => {
      d.classList.add("hidden")
    })
  })

  // Sticky FilterSEction
  const filterSection = document.getElementById("filter-section")
  const navbar = document.querySelector("#mobile-nav")
  const navbarHeight = navbar.offsetHeight
  const originalOffsetTop = filterSection.offsetTop

  window.addEventListener("scroll", () => {
    if (window.scrollY >= originalOffsetTop - navbarHeight) {
      // When sticky
      filterSection.classList.add(
        "fixed",
        "top-14",
        "w-full",
        "z-50",
        "bg-white",
        "shadow-sm",
        "border-t"
        //   "border-gray-200"
      )
      filterSection.classList.remove("relative", "border-b", "py-3")
      document.querySelectorAll(".filter-trigger").forEach((filter) => {
        filter.classList.remove("border-b-2", "border-gray-300")
      })
    } else {
      // When normal
      filterSection.classList.remove(
        "fixed",
        "top-14",
        "w-full",
        "z-50",
        "bg-white",
        "shadow-sm",
        "border-t"
      )
      filterSection.classList.add("relative", "border-b", "py-3")
      // document.querySelectorAll(".filter-trigger").forEach((filter) => {
      //   filter.classList.add("border-b-2", "border-gray-300")
      // })
    }
  })
})
