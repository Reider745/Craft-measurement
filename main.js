/*
BUILD INFO:
  dir: core/dev
  target: main.js
  files: 7
*/



// file: info.js

IMPORT("BaublesAPI");




// file: item/ItemRegister.js

IDRegistry.genItemID("UsedBall");
Item.createItem("UsedBall", "used ball", {name: "UsedBall", meta: 0}, {stack: 1});
Translation.addTranslation("used ball", {ru: "использованный шар"});

IDRegistry.genItemID("BloodyBall");
Item.createItem("BloodyBall", "bloody ball", {name: "BloodyBall", meta: 0}, {stack: 1});
Translation.addTranslation("bloody ball", {ru: "кровавый шар"});

IDRegistry.genItemID("cursedSoul");
Item.createItem("cursedSoul", "cursed soul", {name: "cursedSoul", meta: 0}, {stack: 64});
Translation.addTranslation("cursed soul", {ru: "проклятая душа"});

IDRegistry.genItemID("heroMedal");
Item.createItem("heroMedal", "hero medal", {name: "heroMedal", meta: 0}, {stack: 64});
Translation.addTranslation("hero medal", {ru: "медаль героя"});

IDRegistry.genItemID("WarrionChestpiece");
Item.createItem("WarrionChestpiece", "Warrior's Chestpiece", {name: "WarrionChestpiece", meta: 0}, {stack: 1});
Translation.addTranslation("Warrior's Chestpiece", {ru: "Нагрудник Воина"});

IDRegistry.genItemID("crown");
Item.createItem("crown", "crown", {name: "crown", meta: 0}, {stack: 1});
Translation.addTranslation("crown", {ru: "корона"});

IDRegistry.genItemID("flightSearch");
Item.createItem("flightSearch", "flight search", {name: "flightSearch", meta: 0}, {stack: 1});
Translation.addTranslation("flight search", {ru: "поис полёта"});

IDRegistry.genItemID("breathAmulet");
Item.createItem("breathAmulet", "breath amulet", {name: "breathAmulet", meta: 0}, {stack: 1});
Translation.addTranslation("breath amulet", {ru: "амулет дыхания"});

IDRegistry.genItemID("crystalOfWorlds1"); Item.createItem("crystalOfWorlds1", "crystal of worlds", {name: "crystalOfWorlds", meta: 0}, {stack: 1});
Translation.addTranslation("crystal of worlds", {ru: "кристалл миров"});

IDRegistry.genItemID("crystalOfWorlds2"); Item.createItem("crystalOfWorlds2", "unstable crystal of the upper world", {name: "crystalOfWorlds", meta: 1}, {stack: 1});
Translation.addTranslation("unstable crystal of the upper world", {ru: "нестабильной кристалл верхнего мира"});

IDRegistry.genItemID("crystalOfWorlds3"); Item.createItem("crystalOfWorlds3", "unstable crystal cursed world", {name: "crystalOfWorlds", meta: 2}, {stack: 1});
Translation.addTranslation("unstable crystal cursed world", {ru: "нестабильный кристалл проклятый мир"});

IDRegistry.genItemID("darkCrystal"); Item.createItem("darkCrystal", "dark crystal", {name: "darkCrystal", meta: 0}, {stack: 64});
Translation.addTranslation("dark crystal", {ru: "тёмный кристалл"});

IDRegistry.genItemID("redMatter"); Item.createItem("redMatter", "red matter", {name: "redMatter", meta: 0}, {stack: 64});
Translation.addTranslation("red matter", {ru: "красная материя"});

IDRegistry.genItemID("stableCrystal1"); Item.createItem("stableCrystal1", "stable crystal of the upper world", {name: "stableCrystal", meta: 0}, {stack: 1});
Translation.addTranslation("stable crystal of the upper world", {ru: "стабильный кристалл верхнего мира"});

IDRegistry.genItemID("stableCrystal2"); Item.createItem("stableCrystal2", "stable crystal of the cursed world", {name: "stableCrystal", meta: 1}, {stack: 1});
Translation.addTranslation("stable crystal of the cursed world", {ru: "стабильный кристалл проклятого мира"});

IDRegistry.genItemID("baseStaff"); Item.createItem("baseStaff", "base of the staff", {name: "baseStaff", meta: 0}, {stack: 64});
Translation.addTranslation("base of the staff", {ru: "основа посоха"});

IDRegistry.genItemID("staffCrystal"); Item.createItem("staffCrystal", "staff crystal", {name: "staffCrystal", meta: 0}, {stack: 64});
Translation.addTranslation("staff crystal", {ru: "кристалл посоха"});

IDRegistry.genItemID("staffDarkness"); Item.createItem("staffDarkness", "staff of darkness", {name: "staffDarkness", meta: 0}, {stack: 1});
Translation.addTranslation("staff of darkness", {ru: "посох тьмы"});

//(amulet, ring, belt, head, body, charm) 
/*Baubles.registerBauble({
    id: 642,
    type: BaubleType.belt,
    onEquip: function(client, container, slotName){
        
    },
    onTakeOff: function(client, container, slotName){ 
        
    }, 
    tick: function(client, container, slotName){
        
    } 
});*/




// file: block/BlockRegister.js

IDRegistry.genBlockID("crystalOre1");                                                      Block.createBlock("crystalOre1", [{name:"ore of the worlds", texture: [["ore", 0]], inCreative: true} ]);

IDRegistry.genBlockID("darknessOre2");                                                                 Block.createBlock("darknessOre2", [{name:"ore of the worlds", texture: [["ore", 1]], inCreative: true} ]);

IDRegistry.genBlockID("RedOre3");                                                            Block.createBlock("RedOre3", [{name:"ore of the worlds", texture: [["ore", 2]], inCreative: true} ]);
Translation.addTranslation("ore of the worlds", {ru: "руда миров"});

IDRegistry.genBlockID("cursedGrass");                                                            Block.createBlock("cursedGrass", [{name:"cursed grass", texture: [["cursedGrass", 0]], inCreative: true} ]);
Translation.addTranslation("cursed grass", {ru: "проклятая трава"});




// file: dimension/cursed.js

var cursed = new Dimensions.CustomDimension("cursed", 845); 
cursed.setSkyColor(15, 15, 15) 
cursed.setFogColor(15, 15, 15); 
 
cursed.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 65, 
            yConversion: [[.5, 1], [1, -1]],
            material: {base:  BlockID.cursedGrass, surface: {id: BlockID.cursedGrass, data: 0, width:3}, cover: BlockID.cursedGrass}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));

Item.registerUseFunction("crystalOfWorlds1", function(coords, item, block, player){
    if(Entity.getDimension(player) == cursed.id){
        let bs = BlockSource.getDefaultForActor(player);
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
        bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.crystalOfWorlds3, 1, 0, null);
    }
});
Item.registerUseFunction("crystalOfWorlds3", function(coords, item, block, player){
    if(Entity.getDimension(player) != cursed.id){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
        Dimensions.transfer(player, cursed.id);
    }
});




// file: dimension/overWorld.js

Item.registerUseFunction("crystalOfWorlds1", function(coords, item, block, player){
    if(Entity.getDimension(player) == 0){
        let bs = BlockSource.getDefaultForActor(player);
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
        bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.crystalOfWorlds2, 1, 0, null);
    }
});
Item.registerUseFunction("crystalOfWorlds2", function(coords, item, block, player){
    if(Entity.getDimension(player) != 0){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
        Dimensions.transfer(player, 0);
    }
});




// file: craft.js

Recipes.addFurnace(BlockID.crystalOre1, ItemID.crystalOfWorlds1, 0);
Recipes.addFurnace(BlockID.darknessOre2, ItemID.darkCrystal, 0);
Recipes.addFurnace(BlockID.RedOre3, ItemID.redMatter, 0);




// file: mods.js





