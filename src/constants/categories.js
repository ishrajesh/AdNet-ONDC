import Fashion from '../assets/images/category/Fashion1.png';
import Grocery from '../assets/images/category/Grocery.png';
import Electronics from '../assets/images/category/Electronics3.png';
import Food from '../assets/images/category/Food.png';
import Home from '../assets/images/category/Home1.png';
import Health from '../assets/images/category/Health1.png';
import BPC from '../assets/images/category/BPC.png';
import Agriculture from '../assets/images/category/Agriculture.png';
import Appliances from '../assets/images/category/Agriculture.png';

export const categoryList = [
    { id: '1', name: 'Fashion', shortName: 'Fashion', imageUrl: Fashion, routeName: 'Fashion', domain: 'ONDC:RET12' },
    { id: '2', name: 'Grocery', shortName: 'Grocery', imageUrl: Grocery, routeName: 'Grocery', domain: 'ONDC:RET10' },
    { id: '3', name: 'Electronics', shortName: 'Electronics', imageUrl: Electronics, routeName: 'Electronics', domain: 'ONDC:RET14' },
    { id: '4', name: 'Food & Beverage', shortName: 'F&B', imageUrl: Food, routeName: 'F&B', domain: 'ONDC:RET11' },
    { id: '5', name: 'Home & Kitchen', shortName: 'Home & Kitchen', imageUrl: Home, routeName: 'Home & Kitchen', domain: 'ONDC:RET16' },
    { id: '6', name: 'Health & Wellness', shortName: 'Health & Wellness', imageUrl: Health, routeName: 'Health & Wellness', domain: 'ONDC:RET18' },
    { id: '7', name: 'Beauty & Personal Care', shortName: 'BPC', imageUrl: BPC, routeName: 'BPC', domain: 'ONDC:RET13' },
    { id: '8', name: 'Agriculture', shortName: 'Agriculture', imageUrl: Agriculture, routeName: 'Agriculture', domain: 'ONDC:AGR10' },
    { id: '9', name: 'Appliances', shortName: 'Appliances', imageUrl: Appliances, routeName: 'Appliances', domain: 'ONDC:RET15' }
];

// export const PRODUCT_SUBCATEGORY = {
//     "Grocery": [
//         { value: 'Fruits and Vegetables', key: 'Fruits and Vegetables', protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Fruits and Vegetables.png` },
//         { value: 'Masala & Seasoning', key: 'Masala & Seasoning', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Masala And Seasoning.png` },
//         { value: 'Oil & Ghee', key: 'Oil & Ghee', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Oil And Ghee.png` },
//         { value: 'Gourmet & World Foods', key: 'Gourmet & World Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Gourmet And World Foods.png` },
//         { value: 'Foodgrains', key: 'Foodgrains', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Foodgrains.png` },
//         { value: 'Eggs, Meat & Fish', key: 'Eggs, Meat & Fish', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Eggs, Meat And Fish.png` },
//         { value: 'Cleaning & Household', key: 'Cleaning & Household', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Cleaning And Household.png` },
//         { value: 'Beverages', key: 'Beverages', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Beverages.png` },
//         { value: 'Beauty & Hygiene', key: 'Beauty & Hygiene', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Beauty And Hygiene.png` },
//         { value: 'Bakery, Cakes & Dairy', key: 'Bakery, Cakes & Dairy', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Bakery, Cakes And Dairy.png` },
//         { value: 'Kitchen Accessories', key: 'Kitchen Accessories', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Kitchen Accessories.png` },
//         { value: 'Baby Care', key: 'Baby Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Baby Care.png` },
//         { value: 'Snacks & Branded Foods', key: 'Snacks & Branded Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Snacks And Branded Foods.png` },
//         { value: 'Pet Care', key: 'Pet Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Pet Care.png` },
//         { value: 'Stationery', key: 'Stationery', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Stationery.png` },
//     ],
//     "BPC": [
//         { value: "Bath & Body", key: "Bath & Body", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Bath & Body.png` },
//         { value: "Feminine Care", key: "Feminine Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Feminine Care.png` },
//         { value: "Fragrance", key: "Fragrance", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Fragrance.png` },
//         { value: "Hair Care", key: "Hair Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Hair Care.png` },
//         { value: "Make Up", key: "Make Up", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Make Up.png` },
//         { value: "Men's Grooming", key: "Men's Grooming", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Men's Grooming.png` },
//         { value: "Oral Care", key: "Oral Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Oral Care.png` },
//         { value: "Skin Care", key: "Skin Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Skin Care.png` },
//         { value: "Maternity Care", key: "Maternity Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Maternity Care.png` },
//         { value: "Nursing & Feeding", key: "Nursing & Feeding", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Nursing & Feeding.png` },
//         { value: "Sexual Wellness & Sensuality", key: "Sexual Wellness & Sensuality", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Sexual Wellness & Sensuality.png` },
//         { value: "Tools & Accessories", key: "Tools & Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Tools & Accessories.png` },
//     ],
//     "Fashion": [
//         { value: "Men's Fashion Accessories", key: "Men's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Fashion Accessories.png` },
//         { value: "Men's Footwear Accessories", key: "Men's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Footwear Accessories.png` },
//         { value: "Men's Topwear", key: "Men's Topwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Topwear.png` },
//         { value: "Men's Bottomwear", key: "Men's Bottomwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Bottomwear.png` },
//         { value: "Men's Innerwear & Sleepwear", key: "Men's Innerwear & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Innerwear & Sleepwear.png` },
//         { value: "Men's Bags & Luggage", key: "Men's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Bags & Luggage.png` },
//         { value: "Men's Eyewear", key: "Men's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Eyewear.png` },
//         { value: "Men's Footwear", key: "Men's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Footwear.png` },
//         { value: "Men's Jewellery", key: "Men's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Men's Jewellery.png` },
//         { value: "Women's Fashion Accessories", key: "Women's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Fashion Accessories.png` },
//         { value: "Women's Footwear Accessories", key: "Women's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Footwear Accessories.png` },
//         { value: "Women's Indian & Fusion Wear", key: "Women's Indian & Fusion Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Indian & Fusion Wear.png` },
//         { value: "Women's Western Wear", key: "Women's Western Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Western Wear.png` },
//         { value: "Women's Lingerie & Sleepwear", key: "Women's Lingerie & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Lingerie & Sleepwear.png` },
//         { value: "Women's Bags & Luggage", key: "Women's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Bags & Luggage.png` },
//         { value: "Women's Eyewear", key: "Women's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Eyewear.png` },
//         { value: "Women's Footwear", key: "Women's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Footwear.png` },
//         { value: "Women's Jewellery", key: "Women's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Women's Jewellery.png` },
//         { value: "Boy's Clothing", key: "Boy's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Boy's Clothing.png` },
//         { value: "Boy's Footwear", key: "Boy's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Boy's Footwear.png` },
//         { value: "Girl's Clothing", key: "Girl's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Girl's Clothing.png` },
//         { value: "Girl's Footwear", key: "Girl's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Girl's Footwear.png` },
//         { value: "Infant's Wear", key: "Infant's Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant's Wear.png` },
//         { value: "Infant Care & Accessories", key: "Infant Care & Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant Care & Accessories.png` },
//         { value: "Infant Feeding & Nursing Essentials", key: "Infant Feeding & Nursing Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant Feeding & Nursing Essentials.png` },
//         { value: "Infant Bath Accessories", key: "Infant Bath Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant Bath Accessories.png` },
//         { value: "Infant Health & Safety", key: "Infant Health & Safety", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant Health & Safety.png` },
//         { value: "Infant Diapers & Toilet Training", key: "Infant Diapers & Toilet Training", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Infant Diapers & Toilet Training.png` },
//         { value: "Kid's Towels & Wrappers", key: "Kid's Towels & Wrappers", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Kid's Towels & Wrappers.png` },
//         { value: "Kid's Fashion Accessories", key: "Kid's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Kid's Fashion Accessories.png` },
//         { value: "Kid's Jewellery", key: "Kid's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Kid's Jewellery.png` },
//         { value: "Kid's Eyewear", key: "Kid's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Kid's Eyewear.png` },
//         { value: "Kid's Bags & Luggage", key: "Kid's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Fashion/Kid's Bags & Luggage.png` },
//     ],
//     "Home & Kitchen": [
//         { value: 'Home Decor', key: 'Home Decor', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Home Decor.png` },
//         { value: 'Home Furnishings', key: 'Home Furnishings', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Home Furnishings.png` },
//         { value: 'Furniture', key: 'Furniture', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Furniture.png` },
//         { value: 'Garden and Outdoor Products', key: 'Garden and Outdoor Products', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Garden and Outdoor Products.png` },
//         { value: 'Home Improvement', key: 'Home Improvement', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Home Improvement.png` },
//         { value: 'Cookware and Dining', key: 'Cookware and Dining', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Cookware and Dining.png` },
//         { value: 'Storage and Organisation', key: 'Storage and Organisation', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Storage and Organisation.png` },
//         { value: 'Home and Decor', key: 'Home and Decor', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Home and Decor.png` },
//     ],
//     "F&B": [
//         { value: 'Baklava', key: 'Baklava', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Baklava.png` },
//         { value: 'Bao', key: 'Bao', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Bao.png` },
//         { value: 'Barbecue', key: 'Barbecue', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Barbecue.png` },
//         { value: 'Biryani', key: 'Biryani', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Biryani.png` },
//         { value: 'Bread', key: 'Bread', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Bread.png` },
//         { value: 'Burger', key: 'Burger', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Burger.png` },
//         { value: 'Cakes', key: 'Cakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cakes.png` },
//         { value: 'Chaat', key: 'Chaat', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chaat.png` },
//         { value: 'Cheesecakes', key: 'Cheesecakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cheesecakes.png` },
//         { value: 'Chicken', key: 'Chicken', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chicken.png` },
//         { value: 'Chicken wings', key: 'Chicken wings', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chicken wings.png` },
//         { value: 'Chips', key: 'Chips', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chips.png` },
//         { value: 'Coffee', key: 'Coffee', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Coffee.png` },
//         { value: 'Cookies', key: 'Cookies', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cookies.png` },
//         { value: 'Crepes', key: 'Crepes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Crepes.png` },
//         { value: 'Dal', key: 'Dal', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dal.png` },
//         { value: 'Desserts', key: 'Desserts', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Desserts.png` },
//         { value: 'Dhokla', key: 'Dhokla', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dhokla.png` },
//         { value: 'Dosa', key: 'Dosa', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dosa.png` },
//         { value: 'Doughnuts', key: 'Doughnuts', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Doughnuts.png` },
//         { value: 'Eggs', key: 'Eggs', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Eggs.png` },
//         { value: 'Energy Drinks', key: 'Energy Drinks', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Energy Drinks.png` },
//         { value: 'Falafel', key: 'Falafel', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Falafel.png` },
//         { value: 'Fresh Juice', key: 'Fresh Juice', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Fresh Juice.png` },
//         { value: 'Fries', key: 'Fries', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Fries.png` },
//         { value: 'Ice cream', key: 'Ice cream', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Ice cream.png` },
//         { value: 'Idli', key: 'Idli', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Idli.png` },
//         { value: 'Kabab', key: 'Kabab', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kabab.png` },
//         { value: 'Kachori', key: 'Kachori', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kachori.png` },
//         { value: 'Kulfi', key: 'Kulfi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kulfi.png` },
//         { value: 'Lassi', key: 'Lassi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Lassi.png` },
//         { value: 'Meal bowl', key: 'Meal bowl', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Meal bowl.png` },
//         { value: 'Mezze', key: 'Mezze', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mezze.png` },
//         { value: 'Mithai', key: 'Mithai', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mithai.png` },
//         { value: 'Momos', key: 'Momos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Momos.png` },
//         { value: 'Mutton', key: 'Mutton', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mutton.png` },
//         { value: 'Nachos', key: 'Nachos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Nachos.png` },
//         { value: 'Noodles', key: 'Noodles', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Noodles.png` },
//         { value: 'Pakodas', key: 'Pakodas', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pakodas.png` },
//         { value: 'Pancakes', key: 'Pancakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pancakes.png` },
//         { value: 'Paneer', key: 'Paneer', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Paneer.png` },
//         { value: 'Pasta', key: 'Pasta', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pasta.png` },
//         { value: 'Pastries', key: 'Pastries', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pastries.png` },
//         { value: 'Pie', key: 'Pie', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pie.png` },
//         { value: 'Pizza', key: 'Pizza', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pizza.png` },
//         { value: 'Poha', key: 'Poha', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Poha.png` },
//         { value: 'Raita', key: 'Raita', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Raita.png` },
//         { value: 'Rice', key: 'Rice', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Rice.png` },
//         { value: 'Rolls', key: 'Rolls', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Rolls.png` },
//         { value: 'Roti', key: 'Roti', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Roti.png` },
//         { value: 'Salad', key: 'Salad', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Salad.png` },
//         { value: 'Samosa', key: 'Samosa', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Samosa.png` },
//         { value: 'Sandwich', key: 'Sandwich', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Sandwich.png` },
//         { value: 'Seafood', key: 'Seafood', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Seafood.png` },
//         { value: 'Shakes & Smoothies', key: 'Shakes & Smoothies', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Shakes & Smoothies.png` },
//         { value: 'Soft Drink', key: 'Soft Drink', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Soft Drink.png` },
//         { value: 'Soup', key: 'Soup', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Soup.png` },
//         { value: 'Spring Roll', key: 'Spring Roll', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Spring Roll.png` },
//         { value: 'Sushi', key: 'Sushi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Sushi.png` },
//         { value: 'Tacos', key: 'Tacos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tacos.png` },
//         { value: 'Tandoori', key: 'Tandoori', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tandoori.png` },
//         { value: 'Tart', key: 'Tart', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tart.png` },
//         { value: 'Tea', key: 'Tea', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tea.png` },
//         { value: 'Thali', key: 'Thali', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Thali.png` },
//         { value: 'Tikka', key: 'Tikka', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tikka.png` },
//         { value: 'Upma', key: 'Upma', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Upma.png` },
//         { value: 'Uttapam', key: 'Uttapam', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Uttapam.png` },
//         { value: 'Vada', key: 'Vada', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Vada.png` },
//         { value: 'Vegetables', key: 'Vegetables', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Vegetables.png` },
//         { value: 'Waffle', key: 'Waffle', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Waffle.png` },
//         { value: 'Wrap', key: 'Wrap', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Wrap.png` },
//         { value: 'Yogurt', key: 'Yogurt', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Yogurt.png` },
//     ],
//     "Electronics": [
//         { value: "Audio", key: "Audio", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Audio.png` },
//         { value: "Camera and Camcorder", key: "Camera and Camcorder", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Camera and Camcorder.png` },
//         { value: "Computer Peripheral", key: "Computer Peripheral", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Computer Peripheral.png` },
//         { value: "Desktop and Laptop", key: "Desktop and Laptop", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Desktop and Laptop.png` },
//         { value: "Earphone", key: "Earphone", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Earphone.png` },
//         { value: "Gaming", key: "Gaming", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Gaming.png` },
//         { value: "Headphone", key: "Headphone", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Headphone.png` },
//         { value: "Mobile Phone", key: "Mobile Phone", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Mobile Phone.png` },
//         { value: "Mobile Accessories", key: "Mobile Accessories", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Mobile Accessories.png` },
//         { value: "Safety Security", key: "Safety Security", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Safety Security.png` },
//         { value: "Smart Watches", key: "Smart Watches", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Smart Watches.png` },
//         { value: "Speaker", key: "Speaker", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Speaker.png` },
//         { value: "Television", key: "Television", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Television.png` },
//         { value: "Video", key: "Video", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Video.png` },
//         { value: "Air Conditioning and Air Cleaners", key: "Air Conditioning and Air Cleaners", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Air Conditioning and Air Cleaners.png` },
//         { value: "Health, Home and Personal Care", key: "Health, Home and Personal Care", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Health, Home and Personal Care.png` },
//         { value: "Heaters", key: "Heaters", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Heaters.png` },
//         { value: "Kitchen Appliances", key: "Kitchen Appliances", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Kitchen Appliances.png` },
//         { value: "Lighting & Electric Fans", key: "Lighting & Electric Fans", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Lighting & Electric Fans.png` },
//         { value: "Refrigerators and Freezers", key: "Refrigerators and Freezers", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Refrigerators and Freezers.png` },
//         { value: "Vacuum Cleaners", key: "Vacuum Cleaners", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Vacuum Cleaners.png` },
//         { value: "Washing Machines and Accessories", key: "Washing Machines and Accessories", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Washing Machines and Accessories.png` },
//         { value: "Water Purifiers and Coolers", key: "Water Purifiers and Coolers", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Water Purifiers and Coolers.png` },
//         { value: "Inverter & Stabilizer", key: "Inverter & Stabilizer", protocolKey: "", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Inverter & Stabilizer.png` }
//     ],
//     "Health & Wellness": [
//         { key: "Pain Relief", value: "Pain Relief", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Pain Relief.png` },
//         { key: "Nutrition and Fitness Supplements", value: "Nutrition and Fitness Supplements", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Nutrition and Fitness Supplements.png` },
//         { key: "Personal Care", value: "Personal Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Personal Care.png` },
//         { key: "Speciality Care", value: "Speciality Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Speciality Care.png` },
//         { key: "Covid Essentials", value: "Covid Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Covid Essentials.png` },
//         { key: "Diabetes Control", value: "Diabetes Control", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Diabetes Control.png` },
//         // {key: "Healthcare Devices", value: "Healthcare Devices", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: Health}, image not available
//         { key: "Ayush", value: "Ayush", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Ayush.png` },
//     ],
//     "Agriculture": [
//         { key: "Seed", value: "Seed", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Seed.png` },
//         { key: "Pesticide", value: "Pesticide", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Pesticide.png` },
//         { key: "Fertilizer", value: "Fertilizer", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Fertilizer.png` },
//         { key: "Organic Crop Protection", value: "Organic Crop Protection", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Organic Crop Protection.png` },
//         { key: "Organic Crop Nutrition", value: "Organic Crop Nutrition", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Organic Crop Nutrition.png` },
//         { key: "Tools and Machinery", value: "Tools and Machinery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Tools and Machinery.png` },
//         { key: "Cattle Feed", value: "Cattle Feed", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Cattle Feed.png` },
//     ]
// };

export const PRODUCT_SUBCATEGORY = {
    "Grocery": [
        {
            value: "Fruits and Vegetables",
            key: "Fruits and Vegetables",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Fruits and Vegetables.png`
        },
        {
            value: "Masala & Seasoning",
            key: "Masala & Seasoning",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Masala And Seasoning.png`
        },
        {
            value: "Oil & Ghee",
            key: "Oil & Ghee",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Oil And Ghee.png`
        },
        {
            value: "Eggs, Meat & Fish",
            key: "Eggs, Meat & Fish",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Eggs, Meat And Fish.png`
        },
        {
            value: "Cleaning & Household",
            key: "Cleaning & Household",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Cleaning And Household.png`
        },
        {
            value: "Bakery, Cakes & Dairy",
            key: "Bakery, Cakes & Dairy",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Bakery, Cakes And Dairy.png`
        },
        {
            value: "Pet Care",
            key: "Pet Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Pet Care.png`
        },
        {
            value: "Stationery",
            key: "Stationery",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Grocery/Stationery.png`
        },
        {
            value: "Dairy and Cheese",
            key: "Dairy and Cheese",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Snacks, Dry Fruits, Nuts",
            key: "Snacks, Dry Fruits, Nuts",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Pasta, Soup and Noodles",
            key: "Pasta, Soup and Noodles",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Cereals and Breakfast",
            key: "Cereals and Breakfast",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Sauces, Spreads and Dips",
            key: "Sauces, Spreads and Dips",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Chocolates and Biscuits",
            key: "Chocolates and Biscuits",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Cooking and Baking Needs",
            key: "Cooking and Baking Needs",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Tinned and Processed Food",
            key: "Tinned and Processed Food",
            protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Atta, Flours and Sooji",
            key: "Atta, Flours and Sooji",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Rice and Rice Products",
            key: "Rice and Rice Products",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dals and Pulses",
            key: "Dals and Pulses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Salt, Sugar and Jaggery",
            key: "Salt, Sugar and Jaggery",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Energy and Soft Drinks",
            key: "Energy and Soft Drinks",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Water",
            key: "Water",
            imageUrl: ``
        },
        {
            value: "Tea and Coffee",
            key: "Tea and Coffee",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Fruit Juices and Fruit Drinks",
            key: "Fruit Juices and Fruit Drinks",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Snacks and Namkeen",
            key: "Snacks and Namkeen",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Ready to Cook and Eat",
            key: "Ready to Cook and Eat",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Pickles and Chutney",
            key: "Pickles and Chutney",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Indian Sweets",
            key: "Indian Sweets",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Frozen Vegetables",
            key: "Frozen Vegetables",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Frozen Snacks",
            key: "Frozen Snacks",
            protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            imageUrl: ``
        },
        {
            value: "Gift Voucher",
            key: "Gift Voucher",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "Appliances": [
        {
            value: "Audio",
            key: "Audio",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Audio.png`
        },
        {
            value: "Camera and Camcorder",
            key: "Camera and Camcorder",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Camera and Camcorder.png`
        },
        {
            value: "Safety Security",
            key: "Safety Security",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Safety Security.png`
        },
        {
            value: "Speaker",
            key: "Speaker",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Speaker.png`
        },
        {
            value: "Television",
            key: "Television",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Television.png`
        },
        {
            value: "Video",
            key: "Video",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Video.png`
        },
        {
            value: "Air Conditioning and Air Cleaners",
            key: "Air Conditioning and Air Cleaners",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Air Conditioning and Air Cleaners.png`
        },
        {
            value: "Health, Home and Personal Care",
            key: "Health, Home and Personal Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Health, Home and Personal Care.png`
        },
        {
            value: "Heaters",
            key: "Heaters",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Heaters.png`
        },
        {
            value: "Kitchen Appliances",
            key: "Kitchen Appliances",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Kitchen Appliances.png`
        },
        {
            value: "Lighting & Electric Fans",
            key: "Lighting & Electric Fans",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Lighting & Electric Fans.png`
        },
        {
            value: "Refrigerators and Freezers",
            key: "Refrigerators and Freezers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Refrigerators and Freezers.png`
        },
        {
            value: "Vacuum Cleaners",
            key: "Vacuum Cleaners",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Vacuum Cleaners.png`
        },
        {
            value: "Washing Machines and Accessories",
            key: "Washing Machines and Accessories",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Washing Machines and Accessories.png`
        },
        {
            value: "Water Purifiers and Coolers",
            key: "Water Purifiers and Coolers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Water Purifiers and Coolers.png`
        },
        {
            value: "Inverter & Stabilizer",
            key: "Inverter & Stabilizer",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Inverter & Stabilizer.png`
        },
    ],
    "BPC": [
        {
            value: "Fragrance",
            key: "Fragrance",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Beauty & Personal Care/Fragrance.png`
        },
        {
            value: "Bath Soaps and Gels",
            key: "Bath Soaps and Gels",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Hair Oils, Care, and Styling",
            key: "Hair Oils, Care, and Styling",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shampoos and Conditioners",
            key: "Shampoos and Conditioners",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shaving and Grooming",
            key: "Shaving and Grooming",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Beard Care and Tools",
            key: "Beard Care and Tools",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Grooming Tools and Accessories",
            key: "Grooming Tools and Accessories",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Nail Care",
            key: "Makeup - Nail Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Eyes",
            key: "Makeup - Eyes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Face",
            key: "Makeup - Face",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Lips",
            key: "Makeup - Lips",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Body",
            key: "Makeup - Body",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Remover",
            key: "Makeup - Remover",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Sets and Kits",
            key: "Makeup - Sets and Kits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Tools and Brushes",
            key: "Makeup - Tools and Brushes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Makeup - Kits and Combos",
            key: "Makeup - Kits and Combos",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Skin Care - Face Cleansers",
            key: "Skin Care - Face Cleansers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Skin Care - Hand and Feet",
            key: "Skin Care - Hand and Feet",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Body Care - Cleansers",
            key: "Body Care - Cleansers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Body Care - Moisturizers",
            key: "Body Care - Moisturizers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Body Care - Loofah and Other Tools",
            key: "Body Care - Loofah and Other Tools",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Body Care - Bath Salt and Additives",
            key: "Body Care - Bath Salt and Additives",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Hair Care - Shampoo, Oils, Conditioners",
            key: "Hair Care - Shampoo, Oils, Conditioners",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Skin Care - Lotions, Moisturisers, and Creams",
            key: "Skin Care - Lotions, Moisturisers, and Creams",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Skin Care - Oils and Serums",
            key: "Skin Care - Oils and Serums",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gift Voucher",
            key: "Gift Voucher",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "Fashion": [
        {
            value: "Shirts",
            key: "Shirts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "T Shirts",
            key: "T Shirts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sweatshirts",
            key: "Sweatshirts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Kurtas & Kurta Sets",
            key: "Kurtas & Kurta Sets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Jackets & Coats",
            key: "Jackets & Coats",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sweaters",
            key: "Sweaters",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Suits",
            key: "Suits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sherwanis",
            key: "Sherwanis",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Track Shirts",
            key: "Track Shirts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Track Suits",
            key: "Track Suits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Unstitched Fabrics",
            key: "Unstitched Fabrics",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dresses",
            key: "Dresses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Tops",
            key: "Tops",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Trousers",
            key: "Trousers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Capris",
            key: "Capris",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Coordinates",
            key: "Coordinates",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Playsuits",
            key: "Playsuits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Jumpsuits",
            key: "Jumpsuits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shrugs & Blouses",
            key: "Shrugs & Blouses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Blazers & Waistcoats",
            key: "Blazers & Waistcoats",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Tights, Leggings & Jeggings",
            key: "Tights, Leggings & Jeggings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Track Pants",
            key: "Track Pants",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Jeans",
            key: "Jeans",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shorts",
            key: "Shorts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Joggers",
            key: "Joggers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dhotis & Dhoti Pants",
            key: "Dhotis & Dhoti Pants",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Churidars",
            key: "Churidars",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Salwars",
            key: "Salwars",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dungarees & Jumpsuits",
            key: "Dungarees & Jumpsuits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Skirts",
            key: "Skirts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Clothing Sets",
            key: "Clothing Sets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Belts",
            key: "Belts",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Caps & Hats",
            key: "Caps & Hats",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Kurtis, Tunics",
            key: "Kurtis, Tunics",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sarees",
            key: "Sarees",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Ethnic Wear",
            key: "Ethnic Wear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Palazzos",
            key: "Palazzos",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dress Materials",
            key: "Dress Materials",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Lehenga Cholis",
            key: "Lehenga Cholis",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Dupattas & Shawls",
            key: "Dupattas & Shawls",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Burqas & Hijabs",
            key: "Burqas & Hijabs",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Blouses",
            key: "Blouses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Blouse Pieces",
            key: "Blouse Pieces",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Briefs",
            key: "Briefs",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Boxers",
            key: "Boxers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Vests",
            key: "Vests",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Robes",
            key: "Robes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Night Suits",
            key: "Night Suits",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Thermal Wear",
            key: "Thermal Wear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Swim Bottoms",
            key: "Swim Bottoms",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Swimwear",
            key: "Swimwear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Bra",
            key: "Bra",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shapewear",
            key: "Shapewear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sleepwear & Loungewear",
            key: "Sleepwear & Loungewear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Camisoles",
            key: "Camisoles",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Lingerie Sets & Accessories",
            key: "Lingerie Sets & Accessories",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Bath Robes",
            key: "Bath Robes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Towels",
            key: "Towels",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Pyjamas",
            key: "Pyjamas",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Party Wear",
            key: "Party Wear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Innerwear & Sleepwear",
            key: "Innerwear & Sleepwear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Nightwear & Loungewear",
            key: "Nightwear & Loungewear",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Watches",
            key: "Watches",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gloves",
            key: "Gloves",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Socks",
            key: "Socks",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Stockings",
            key: "Stockings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Laces",
            key: "Laces",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Soles & Charms",
            key: "Soles & Charms",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shoe Racks & Organisers",
            key: "Shoe Racks & Organisers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Shoe Care - Accessories",
            key: "Shoe Care - Accessories",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Flip-Flops & Flats",
            key: "Flip-Flops & Flats",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sandals & Floaters",
            key: "Sandals & Floaters",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Backpacks",
            key: "Backpacks",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Handbags",
            key: "Handbags",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Trolley, Luggage & Suitcases",
            key: "Trolley, Luggage & Suitcases",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Formal Shoes",
            key: "Formal Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Casual Shoes",
            key: "Casual Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sports Shoes",
            key: "Sports Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Outdoor Shoes",
            key: "Outdoor Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Work & Safety Shoes",
            key: "Work & Safety Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Ethnic Shoes",
            key: "Ethnic Shoes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Boots",
            key: "Boots",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Heels",
            key: "Heels",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Contact Lenses",
            key: "Contact Lenses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Eye Glasses",
            key: "Eye Glasses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Eye Glass Frames",
            key: "Eye Glass Frames",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sunglasses",
            key: "Sunglasses",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Contact Lens Cases",
            key: "Contact Lens Cases",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Contact Lens Solutions",
            key: "Contact Lens Solutions",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Contact Lens Tweezers",
            key: "Contact Lens Tweezers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Eyeglasses Pouches & Cases",
            key: "Eyeglasses Pouches & Cases",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Microfiber Wipes",
            key: "Microfiber Wipes",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Eyewear Slings",
            key: "Eyewear Slings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Bracelets",
            key: "Bracelets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Chains",
            key: "Chains",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Mangalsutra",
            key: "Mangalsutra",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Anklets",
            key: "Anklets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Bangles & Bracelets",
            key: "Bangles & Bracelets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Necklaces",
            key: "Necklaces",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Earrings",
            key: "Earrings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Jewellery Sets",
            key: "Jewellery Sets",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Nosepins & Noserings",
            key: "Nosepins & Noserings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Pendants",
            key: "Pendants",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Rings",
            key: "Rings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Toe Rings",
            key: "Toe Rings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gold Coins",
            key: "Gold Coins",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Brooch",
            key: "Brooch",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "Home & Kitchen": [
        {
            value: "Home Decor",
            key: "Home Decor",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Home Decor.png`
        },
        {
            value: "Furniture",
            key: "Furniture",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Furniture.png`
        },
        {
            value: "Home Furnishing - Bedding and Linen",
            key: "Home Furnishing - Bedding and Linen",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Cleaning Supplies",
            key: "Cleaning Supplies",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Electricals",
            key: "Electricals",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Bathroom and Kitchen fixtures",
            key: "Bathroom and Kitchen fixtures",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Garden & Outdoor",
            key: "Garden & Outdoor",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sports and Fitness Equipment",
            key: "Sports and Fitness Equipment",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Cookware",
            key: "Cookware",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Cookware and Dining.png`
        },
        {
            value: "Serveware",
            key: "Serveware",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Cookware and Dining.png`
        },
        {
            value: "Kitchen Storage and Containers",
            key: "Kitchen Storage and Containers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Home & Decor/Storage and Organisation.png`
        },
        {
            value: "Kitchen Tools",
            key: "Kitchen Tools",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Closet/Laundry/Shoe Organization",
            key: "Closet/Laundry/Shoe Organization",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Toys and Games",
            key: "Toys and Games",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Stationery",
            key: "Stationery",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gift Voucher",
            key: "Gift Voucher",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "F&B": [
        { value: 'Baklava', key: 'Baklava', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Baklava.png` },
        { value: 'Bao', key: 'Bao', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Bao.png` },
        { value: 'Barbecue', key: 'Barbecue', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Barbecue.png` },
        { value: 'Biryani', key: 'Biryani', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Biryani.png` },
        { value: 'Bread', key: 'Bread', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Bread.png` },
        { value: 'Burger', key: 'Burger', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Burger.png` },
        { value: 'Cakes', key: 'Cakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cakes.png` },
        { value: 'Chaat', key: 'Chaat', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chaat.png` },
        { value: 'Cheesecakes', key: 'Cheesecakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cheesecakes.png` },
        { value: 'Chicken', key: 'Chicken', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chicken.png` },
        { value: 'Chicken wings', key: 'Chicken wings', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chicken wings.png` },
        { value: 'Chips', key: 'Chips', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Chips.png` },
        { value: 'Coffee', key: 'Coffee', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Coffee.png` },
        { value: 'Cookies', key: 'Cookies', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Cookies.png` },
        { value: 'Crepes', key: 'Crepes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Crepes.png` },
        { value: 'Dal', key: 'Dal', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dal.png` },
        { value: 'Desserts', key: 'Desserts', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Desserts.png` },
        { value: 'Dhokla', key: 'Dhokla', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dhokla.png` },
        { value: 'Dosa', key: 'Dosa', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Dosa.png` },
        { value: 'Doughnuts', key: 'Doughnuts', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Doughnuts.png` },
        { value: 'Eggs', key: 'Eggs', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Eggs.png` },
        { value: 'Energy Drinks', key: 'Energy Drinks', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Energy Drinks.png` },
        { value: 'Falafel', key: 'Falafel', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Falafel.png` },
        { value: 'Fresh Juice', key: 'Fresh Juice', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Fresh Juice.png` },
        { value: 'Fries', key: 'Fries', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Fries.png` },
        { value: 'Ice cream', key: 'Ice cream', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Ice cream.png` },
        { value: 'Idli', key: 'Idli', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Idli.png` },
        { value: 'Kabab', key: 'Kabab', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kabab.png` },
        { value: 'Kachori', key: 'Kachori', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kachori.png` },
        { value: 'Kulfi', key: 'Kulfi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Kulfi.png` },
        { value: 'Lassi', key: 'Lassi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Lassi.png` },
        { value: 'Meal bowl', key: 'Meal bowl', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Meal bowl.png` },
        { value: 'Mezze', key: 'Mezze', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mezze.png` },
        { value: 'Mithai', key: 'Mithai', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mithai.png` },
        { value: 'Momos', key: 'Momos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Momos.png` },
        { value: 'Mutton', key: 'Mutton', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Mutton.png` },
        { value: 'Nachos', key: 'Nachos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Nachos.png` },
        { value: 'Noodles', key: 'Noodles', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Noodles.png` },
        { value: 'Pakodas', key: 'Pakodas', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pakodas.png` },
        { value: 'Pancakes', key: 'Pancakes', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pancakes.png` },
        { value: 'Paneer', key: 'Paneer', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Paneer.png` },
        { value: 'Pasta', key: 'Pasta', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pasta.png` },
        { value: 'Pastries', key: 'Pastries', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pastries.png` },
        { value: 'Pie', key: 'Pie', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pie.png` },
        { value: 'Pizza', key: 'Pizza', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Pizza.png` },
        { value: 'Poha', key: 'Poha', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Poha.png` },
        { value: 'Raita', key: 'Raita', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Raita.png` },
        { value: 'Rice', key: 'Rice', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Rice.png` },
        { value: 'Rolls', key: 'Rolls', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Rolls.png` },
        { value: 'Roti', key: 'Roti', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Roti.png` },
        { value: 'Salad', key: 'Salad', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Salad.png` },
        { value: 'Samosa', key: 'Samosa', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Samosa.png` },
        { value: 'Sandwich', key: 'Sandwich', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Sandwich.png` },
        { value: 'Seafood', key: 'Seafood', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Seafood.png` },
        { value: 'Shakes & Smoothies', key: 'Shakes & Smoothies', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Shakes & Smoothies.png` },
        { value: 'Soft Drink', key: 'Soft Drink', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Soft Drink.png` },
        { value: 'Soup', key: 'Soup', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Soup.png` },
        { value: 'Spring Roll', key: 'Spring Roll', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Spring Roll.png` },
        { value: 'Sushi', key: 'Sushi', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Sushi.png` },
        { value: 'Tacos', key: 'Tacos', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tacos.png` },
        { value: 'Tandoori', key: 'Tandoori', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tandoori.png` },
        { value: 'Tart', key: 'Tart', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tart.png` },
        { value: 'Tea', key: 'Tea', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tea.png` },
        { value: 'Thali', key: 'Thali', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Thali.png` },
        { value: 'Tikka', key: 'Tikka', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Tikka.png` },
        { value: 'Upma', key: 'Upma', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Upma.png` },
        { value: 'Uttapam', key: 'Uttapam', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Uttapam.png` },
        { value: 'Vada', key: 'Vada', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Vada.png` },
        { value: 'Vegetables', key: 'Vegetables', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Vegetables.png` },
        { value: 'Waffle', key: 'Waffle', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Waffle.png` },
        { value: 'Wrap', key: 'Wrap', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Wrap.png` },
        { value: 'Yogurt', key: 'Yogurt', protocolKey: '@ondc/org/mandatory_reqs_veggies_fruits', imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Food & Beverage/Yogurt.png` },
    ],
    "Electronics": [
        {
            value: "Mobile Phone",
            key: "Mobile Phone",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Mobile Phone.png`
        },
        {
            value: "Smart Watch",
            key: "Smart Watch",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Smart Watches.png`
        },
        {
            value: "Headset",
            key: "Headset",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Headphone.png`
        },
        {
            value: "Laptop",
            key: "Laptop",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Desktop and Laptop.png`
        },
        {
            value: "Desktop",
            key: "Desktop",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Electronics/Desktop and Laptop.png`
        },
        {
            value: "Tablet",
            key: "Tablet",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Keyboard",
            key: "Keyboard",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Monitor",
            key: "Monitor",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Mouse",
            key: "Mouse",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Power Bank",
            key: "Power Bank",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "Health & Wellness": [
        {
            value: "Pain Relief",
            key: "Pain Relief",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Pain Relief.png`
        },
        {
            value: "Nutrition and Fitness Supplements",
            key: "Nutrition and Fitness Supplements",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Nutrition and Fitness Supplements.png`
        },
        {
            value: "Speciality Care",
            key: "Speciality Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Speciality Care.png`
        },
        {
            value: "Covid Essentials",
            key: "Covid Essentials",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Covid Essentials.png`
        },
        {
            value: "Diabetes Control",
            key: "Diabetes Control",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Health & Wellness/Diabetes Control.png`
        },
        {
            value: "Healthcare & Fitness Devices",
            key: "Healthcare & Fitness Devices",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Ayurvedic",
            key: "Ayurvedic",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Homeopathy",
            key: "Homeopathy",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Unani and Siddha",
            key: "Unani and Siddha",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Elder Care",
            key: "Elder Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Baby Care",
            key: "Baby Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Orthopaedic Care",
            key: "Orthopaedic Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Mobility Aids",
            key: "Mobility Aids",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Medicated Hair Care",
            key: "Medicated Hair Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Medicated Skin Care",
            key: "Medicated Skin Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Speciality Face Cleansers",
            key: "Speciality Face Cleansers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gastric Care",
            key: "Gastric Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "ENT Care",
            key: "ENT Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Eye Care",
            key: "Eye Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Cold and Cough",
            key: "Cold and Cough",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sexual Wellness",
            key: "Sexual Wellness",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Feminine Care",
            key: "Feminine Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Maternity Care",
            key: "Maternity Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Nursing and Feeding",
            key: "Nursing and Feeding",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Hand Wash",
            key: "Hand Wash",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Sanitizers",
            key: "Sanitizers",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Baby Care - Wipes and Buds",
            key: "Baby Care - Wipes and Buds",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Baby Care - Rash Creams",
            key: "Baby Care - Rash Creams",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Baby Care - Diapers and Accessories",
            key: "Baby Care - Diapers and Accessories",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Health and Safety",
            key: "Health and Safety",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Oral Care",
            key: "Oral Care",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Contraceptives",
            key: "Contraceptives",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Breathe Easy",
            key: "Breathe Easy",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Health Foods and Drinks",
            key: "Health Foods and Drinks",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Wound Care and Dressings",
            key: "Wound Care and Dressings",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Surgicals",
            key: "Surgicals",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Mental Wellness",
            key: "Mental Wellness",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
        {
            value: "Gift Voucher",
            key: "Gift Voucher",
            protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            imageUrl: ``
        },
    ],
    "Agriculture": [
        { key: "Seed", value: "Seed", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Seed.png` },
        { key: "Pesticide", value: "Pesticide", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Pesticide.png` },
        { key: "Fertilizer", value: "Fertilizer", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Fertilizer.png` },
        { key: "Organic Crop Protection", value: "Organic Crop Protection", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Organic Crop Protection.png` },
        { key: "Organic Crop Nutrition", value: "Organic Crop Nutrition", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Organic Crop Nutrition.png` },
        { key: "Tools and Machinery", value: "Tools and Machinery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Tools and Machinery.png` },
        { key: "Cattle Feed", value: "Cattle Feed", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities", imageUrl: `https://reference-buyer-app-assets.s3-ap-south-1.amazonaws.com/public-assets/Agriculture/Cattle Feed.png` },
    ]
};