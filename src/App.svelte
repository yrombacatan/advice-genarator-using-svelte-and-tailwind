<script>
  import TailwindCss from './TailwindCSS.svelte';

  // icon
  import iconDice from './assets/images/icon-dice.svg'
  import iconPatternSmall from './assets/images/pattern-divider-mobile.svg'
  import iconPatternLarge from './assets/images/pattern-divider-desktop.svg'

  let slip = {}

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    slip = data.slip
  }

  getAdvice()

</script>

<TailwindCss />

<main class="grid place-items-center min-h-screen bg-dark_blue text-base p-5">
  <div class="md:w-1/2 lg:w-3/5 xl:w-2/5 relative bg-dark_grayish_blue p-8 rounded-lg text-center">
    <p class="uppercase text-xs text-neon_green font-semibold tracking-extra-wide">Advice # {slip?.id ?? "Loading"}</p>
    <div class="my-8">
      <p class="text-gray-300 font-semibold">{slip?.advice ?? "Loading"}</p>
    </div>
    <div class="flex justify-center items-center mb-8">
      <span>
        <img src={iconPatternSmall} alt="divider-icon" class="md:hidden"/>
        <img src={iconPatternLarge} alt="divider-icon" class="hidden md:block"/>
      </span>
    </div>
    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2">
      <button on:click={getAdvice} class="rounded-full bg-neon_green p-5 transition hover:drop-shadow-neon">
        <img src={iconDice} alt="Icon"/>
      </button>
    </div>
  </div>
</main>