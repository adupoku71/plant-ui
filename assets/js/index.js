// document.addEventListener("DOMContentLoaded", () => {
//   const filterDropDown = document.querySelectorAll(".filter-dropdown")

//   // Filter Section Drop Down
//   document.querySelectorAll(".filter-trigger").forEach((trigger) => {
//     trigger.addEventListener("click", (e) => {
//       e.stopPropagation()
//       const bottomBorder = trigger.querySelector(".bottom-line")
//       document.querySelectorAll(".filter-trigger").forEach((t) => {
//         if (t != trigger)
//           t.querySelector(".bottom-line")?.classList.add("hidden")

//         // t.classList.remove("text-pink-300")
//       })
//       const dropdown = trigger.nextElementSibling
//       trigger.classList.toggle("text-pink-300")
//       bottomBorder.classList.toggle("hidden")
//       //   bottomBorder.classList.toggle("bg-pink-300")

//       if (dropdown) {
//         const height = `h-[${dropdown.scrollHeight}px]`

//         dropdown.classList.toggle(height)

//         // Toggle dropdown height
//         filterDropDown.forEach((d) => {
//           if (d !== dropdown) {
//             d.classList.remove(height)
//           }
//         })
//       }
//       //   const icon = trigger.querySelector("i")
//     })
//   })

//   document.addEventListener("click", () => {
//     console.log("clicked")

//     document.querySelectorAll(".filter-trigger").forEach((d) => {
//       d.querySelector(".bottom-line")?.classList.add("hidden")
//       d.classList.remove("h-[160px]")
//     })
//   })
//   document.addEventListener("click", () => {
//     document.querySelectorAll(".filter-dropdown").forEach((d) => {
//       d.classList.remove("h-[160px]")
//     })
//   })

//   // Sticky FilterSEction
//   const filterSection = document.getElementById("filter-section")
//   const navbar = document.querySelector("#mobile-nav")
//   const navbarHeight = navbar.offsetHeight
//   //   const navbarHeight = 60
//   const originalOffsetTop = filterSection.offsetTop

//   window.addEventListener("scroll", () => {
//     if (window.scrollY >= originalOffsetTop - navbarHeight) {
//       // When sticky
//       filterSection.classList.add(
//         "fixed",
//         `top-[${navbarHeight - 1}px]`,
//         "w-full",
//         "z-50",
//         // "bg-gray-50",
//         "shadow-sm",
//         "left-0",
//         "bg-white"
//         // "pb-2"
//         // "bg-blue-700"
//         // "border-t"
//         //   "border-gray-200"
//       )
//       filterSection.classList.remove("relative", "border-b", "py-2")
//       //   document.querySelectorAll(".filter-trigger").forEach((filter) => {
//       //     filter.classList.remove("border-b-2", "border-gray-300")
//       //   })
//     } else {
//       // When normal
//       filterSection.classList.remove(
//         "fixed",
//         `top-[${navbarHeight}px]`,
//         "w-full",
//         "z-50",
//         // "bg-white",
//         "shadow-sm",
//         "border-t"
//         // "pb-2"
//       )
//       //   filterSection.classList.add("relative", "py-2")
//       // document.querySelectorAll(".filter-trigger").forEach((filter) => {
//       //   filter.classList.add("border-b-2", "border-gray-300")
//       // })
//     }
//   })
// })

document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const filterSection = document.getElementById("filter-section")
  const navbar = document.querySelector("#mobile-nav")
  const filterTriggers = document.querySelectorAll(".filter-trigger")
  const filterDropdowns = document.querySelectorAll(".filter-dropdown")

  // Constants
  const navbarHeight = navbar.offsetHeight
  const originalOffsetTop = filterSection.offsetTop

  // Toggle dropdown visibility
  const toggleDropdown = (trigger) => {
    const bottomBorder = trigger.querySelector(".bottom-line")
    const dropdown = trigger.nextElementSibling

    // Close other dropdowns
    filterTriggers.forEach((t) => {
      if (t !== trigger) {
        t.querySelector(".bottom-line")?.classList.add("hidden")
        t.classList.remove("text-pink-300")
      }
    })

    // Toggle current dropdown
    trigger.classList.toggle("text-pink-300")
    bottomBorder.classList.toggle("hidden")

    if (dropdown) {
      const height = `h-[${dropdown.scrollHeight}px]`
      dropdown.classList.toggle(height)

      //   close other dropdowns
      filterDropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove(height)
        }
      })
    }
  }

  // Close all dropdowns
  const closeAllDropdowns = () => {
    filterTriggers.forEach((trigger) => {
      trigger.querySelector(".bottom-line")?.classList.add("hidden")
      trigger.classList.remove("text-pink-300")
    })

    filterDropdowns.forEach((dropdown) => {
      const height = `h-${dropdown.scrollHeight}px`

      dropdown.classList.remove("h-[140px]")
    })
  }

  // Handle sticky filter section
  const handleStickyFilter = () => {
    const shouldStick = window.scrollY >= originalOffsetTop - navbarHeight

    if (shouldStick) {
      filterSection.classList.add(
        "fixed",
        `top-[${navbarHeight - 1}px]`,
        "w-full",
        "z-50",
        "shadow-sm",
        "left-0",
        "bg-white"
      )
      filterSection.classList.remove("relative", "border-b", "py-2")
    } else {
      filterSection.classList.remove(
        "fixed",
        `top-[${navbarHeight}px]`,
        "w-full",
        "z-50",
        "shadow-sm",
        "border-t"
      )
    }
  }

  // Event listeners
  filterTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleDropdown(trigger)
    })
  })

  document.addEventListener("click", closeAllDropdowns)
  window.addEventListener("scroll", handleStickyFilter)

  // Initialize
  handleStickyFilter()
})
