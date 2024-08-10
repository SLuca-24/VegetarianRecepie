import React from 'react';
import Singture from "../img/antipasti-vegani-fiore-zucchina.jpg.webp"
import SignatureLunch from "../img/ricette-pasta-fredda-taglienti.jpg.webp"
import SignatureDinner from "../img/Crema-di-cavolfiori-tuorlo-impanato-e-limone.jpeg"


function SignatureSection(props) {
  return (
    <div className="signature-background">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    <h1 className="signature-title">SIGNATURE RECEPIE</h1>
    <div className="signature-section">
<card className="card">
<img src={Singture} alt="card img" />
<a href="https://www.finedininglovers.com/recipes/appetizer/smoked-zucchini-flower-served-its-own-mustard" target="_blanck"><h2>Smoked Zucchini Flowers with Mustard</h2></a>
<h3><i class="fas fa-utensils"></i>Appetizers</h3>
<p>Fresh zucchini flowers are marinated in mustard and then lightly smoked. The result is an elegant dish with a delightful contrast of smoky and tangy flavors, perfect as a sophisticated appetizer or gourmet side dish."</p>
</card>

<card className="card">
<img src={SignatureLunch} alt="card img" />
<a href="https://www.finedininglovers.com/recipes/main-course/pasta-salad-cold-spaghetti-carrot-and-grapefruit-juice" target="_blanck"><h2>Pasta salad with grapefruit and carrot</h2></a>
<h3><i class="fas fa-utensils"></i>Lunch</h3>
<p>
Pasta salad with grapefruit and carrot is a fresh, light dish that combines the sweetness of carrots with the tanginess of grapefruit. The pasta is dressed with a light vinaigrette, resulting in a vibrant and refreshing salad.</p>
</card>

<card className="card">
<img src={SignatureDinner} alt="card img" />
<a href="https://www.antoninocannavacciuolo.it/ricette/secondi-piatti/crema-di-cavolfiore/" target="_blanck"><h2>Cauliflower cream, breaded yolk, and lemon</h2></a>
<h3><i class="fas fa-utensils"></i>Dinner</h3>
<p>This dish features a silky cauliflower cream paired with a delicately breaded and fried egg yolk, offering a rich contrast of textures. A touch of lemon adds brightness, balancing the creamy and crispy elements with a refreshing citrus note.</p>
</card>
    </div>
    </div>
  );
}

export default SignatureSection;