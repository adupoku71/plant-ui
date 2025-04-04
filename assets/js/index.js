document.addEventListener("DOMContentLoaded", () => {
  const filterDropDown = document.querySelectorAll(".filter-dropdown")

  // Filter Section Drop Down
  document.querySelectorAll(".filter-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation()
      console.log("clicked")

      const dropdown = trigger.nextElementSibling
      console.log(dropdown)

      if (dropdown) {
        const height = `h-[${dropdown.scrollHeight}px]`

        dropdown.classList.toggle(height)

        // Toggle dropdown height
        filterDropDown.forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove(height)
          }
        })
      }
      //   const icon = trigger.querySelector("i")
    })
  })

  document.addEventListener("click", () => {
    document.querySelectorAll(".filter-dropdown").forEach((d) => {
      d.classList.remove("h-[160px]")
    })
  })

  // Sticky FilterSEction
  const filterSection = document.getElementById("filter-section")
  //   const navbar = document.querySelector("#mobile-nav")
  //   const navbarHeight = navbar.offsetHeight
  const navbarHeight = 64
  const originalOffsetTop = filterSection.offsetTop

  window.addEventListener("scroll", () => {
    if (window.scrollY >= originalOffsetTop - navbarHeight) {
      // When sticky
      filterSection.classList.add(
        "fixed",
        "top-14",
        "w-full",
        "z-50",
        "bg-gray-50",
        "shadow-sm",
        "left-0",
        "bg-white"
        // "border-t"
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
      filterSection.classList.add("relative", "py-3")
      // document.querySelectorAll(".filter-trigger").forEach((filter) => {
      //   filter.classList.add("border-b-2", "border-gray-300")
      // })
    }
  })
})
