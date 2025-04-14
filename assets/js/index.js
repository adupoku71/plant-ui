document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const filterSection = document.getElementById("filter-section")
  const navbar = document.querySelector("#mobile-nav")
  const filterTriggers = document.querySelectorAll(".filter-trigger")
  const filterDropdowns = document.querySelectorAll(".filter-dropdown")
  const cancel = document.getElementById("cancel")
  const overlay = document.getElementById("search-overlay")
  const logo = document.getElementById("logo")
  const accountAndCart = document.querySelector("#account-and-cart") // More reliable selector

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
    // overlay.classList.add("hidden")
    filterTriggers.forEach((trigger) => {
      trigger.querySelector(".bottom-line")?.classList.add("hidden")
      //   trigger.classList.toggle("text-pink-300")
    })

    filterDropdowns.forEach((dropdown) => {
      const height = `h-${dropdown.scrollHeight}px`

      dropdown.classList.remove(height)
    })
  }

  // Handle sticky filter section
  const handleStickyFilter = () => {
    const shouldStick = window.scrollY >= originalOffsetTop - navbarHeight

    if (shouldStick) {
      filterSection.classList.add(
        "fixed",
        `top-[${navbarHeight}px]`,
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
        "shadow-sm"
        // "border-t"
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

  //   const cancel = document.getElementById("cancel")
  //   const overlay = document.getElementById("search-overlay")
  //   const logo = document.getElementById("logo")
  //   const accountAndCart = document.querySelector(
  //     ".flex.gap-3.items-center.h-full"
  //   ) // More reliable selector

  search.addEventListener("click", () => {
    console.log("clicked")
    overlay.classList.remove("hidden")

    // Only hide these elements on mobile (screen width less than 768px)
    if (window.innerWidth < 768) {
      cancel.classList.remove("hidden")
      logo.classList.add("hidden")
      accountAndCart.classList.add("hidden")
    }
  })

  cancel.addEventListener("click", () => {
    overlay.classList.add("hidden")

    // Only show these elements if they were hidden (mobile)
    if (window.innerWidth < 768) {
      cancel.classList.add("hidden")
      logo.classList.remove("hidden")
      accountAndCart.classList.remove("hidden")
    }
  })
  document.addEventListener("click", (e) => {
    // Only for desktop screens (768px and up)
    if (window.innerWidth >= 768) {
      // Check if click is outside the search input and overlay
      if (!search.contains(e.target) && !overlay.contains(e.target)) {
        overlay.classList.add("hidden")
      }
    }
  })

  // Prevent clicks inside the overlay from closing it
  overlay.addEventListener("click", (e) => {
    e.stopPropagation()
  })
  document.addEventListener("click", closeAllDropdowns)
  window.addEventListener("scroll", handleStickyFilter)

  // Initialize
  handleStickyFilter()
})
