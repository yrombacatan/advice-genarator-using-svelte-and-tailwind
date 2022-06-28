<script>

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

<main class="grid place-items-center min-h-screen bg-dark_blue text-base p-5">
  <div class="md:w-1/2 lg:w-3/5 xl:w-2/5 relative bg-dark_grayish_blue p-8 rounded-lg text-center">
    <p class="uppercase text-xs text-neon_green font-semibold tracking-extra-wide">Advice # {slip?.id ?? "Loading"}</p>
    <div class="my-8">
      <p class="text-gray-300 font-semibold">"{slip?.advice ?? "Loading"}"</p>
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

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
  @tailwind components;

  @layer base {
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
      :root {
          --light-cyan: 193deg 38% 86%;
          --neon-green: 150deg 100% 66%;
          --grayish-blue: 217deg 19% 38%;
          --dark-grayish-blue: 217deg 19% 24%;
          --dark-blue: 218deg 23% 16%;
      }
  }

</style>
