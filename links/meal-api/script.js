const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const display = document.getElementById("meal-container");
const closepic = document.getElementById("closemodal");
const pic = document.getElementById("details");
const modalimage = document.getElementById("modalImg");
const mealname = document.getElementById("mealname");
const category = document.getElementById("mealcategory");
const instrunction = document.getElementById("modalinstruction");
closepic.addEventListener("click", () => {
  pic.classList.remove("flex");
  pic.classList.add("hidden");
});
async function meals(query = "chicken") {
  display.innerHTML = `
    <p class=" col-span-full text-center text-2xl text-gray-600 font-semibold italic">
    Loading.....
    </p>
    `;
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const itemsList = await response.json();
    console.log(itemsList);
    displayItms(itemsList.meals);
  } catch (error) {
    display.innerHTML = `
  <p class=" col-span-full text-center italic text-lg text-gray-400">
     No Items found
  </p>
  `;
  }
}
function displayItms(meals) {
  if (!meals || meals.length === 0) {
    display.innerHTML = `
        <p class="col-span-full text-center text-red-500 text-xl">
        No Items Found
        </p>
        `;
    return;
  }
  display.innerHTML = meals
    .map(
      (meal) =>
        `<div class="rounded-2xl bg-black flex flex-col  overflow-hidden hover:shadow-[0_0_30px_black] hover:-translate-y-2 transition duration-300 relative">
            <img src='${meal.strMealThumb}' class="w-full h-62 object-cover " />
            <div class="p-4">
                <span class="absolute top-1 right-1 px-2 py-1 rounded-full font-bold  text-sm text-yellow-500 bg-black">${meal.strCountry}</span>
                <h2 title='${meal.strMeal}' class="mealname text-white text-2xl leading-tight min-h-[60px] mb-2">${meal.strMeal}</h2>
                <div class="flex flex-col justify-items-end w-full gap-3">
                <span class="text-gray-400 font-semibold text-lg">${meal.strCategory}</span>
                <button type="button" onclick="showdetails('${meal.idMeal}')" class="bg-teal-300 hover:bg-teal-500 mt-auto tracking-widest text-black font-bold italic px-2 py-1 rounded-md cursor-pointer">
                Details
                </button>
                </div>
            </div>
        </div>`,
    )
    .join("");
}
searchBtn.addEventListener("click", function () {
  const query = input.value.trim();
  if (query !== "") {
    meals(query);
  }
});
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const query = input.value.trim();
    if (query !== "") {
      meals(query);
    }
  }
});
async function showdetails(id) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const itemsList = await response.json();
    console.log(itemsList);
    const meal = itemsList.meals[0];
    modalimage.src = meal.strMealThumb;
    pic.classList.remove("hidden");
    pic.classList.add("flex");
    mealname.innerHTML = `${meal.strMeal}`;
    category.innerHTML = `${meal.strCategory}`;
    instrunction.innerHTML = `${meal.strInstructions}`;
  } catch (error) {
    console.log(error);
  }
}

meals();
