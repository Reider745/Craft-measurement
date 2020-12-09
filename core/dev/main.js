IMPORT("BaublesAPI");
importLib("SoundAPI","*");
//СаняСаня хуйхуй саси
IDRegistry.genItemID("Guide");
Item.createItem("Guide", "справочник миров", {name: "book_Guide", meta: 0}, {stack: 1});

IDRegistry.genItemID("Boss1");
Item.createItem("Boss1", "использованый шар ", {name: "aboss", meta: 1}, {stack: 1});

IDRegistry.genItemID("spawnboss1");
Item.createItem("spawnboss1", "кровавый шар", {name: "aboss", meta: 0}, {stack: 1});

IDRegistry.genItemID("boss");
Item.createItem("boss", "проклятая душа", {name: "dyw", meta: 0}, {stack: 64});

IDRegistry.genItemID("medal");
Item.createItem("medal", "медаль героя", {name: "medal", meta: 0}, {stack: 64});

IDRegistry.genItemID("cloman");
Item.createItem("cloman", "сломаный ключ", {name: "cloman", meta: 1}, {stack: 64});

IDRegistry.genItemID("test10");
Item.createItem("test10", "Нагрудник Воина", {name: "noy", meta: 0}, {stack: 1});



IDRegistry.genItemID("koron");
Item.createItem("koron", "корона", {name: "koron", meta: 0}, {stack: 1});

IDRegistry.genItemID("poic");
Item.createItem("poic", "поис полёта", {name: "poic", meta: 0}, {stack: 1});

IDRegistry.genItemID("amylet1");
Item.createItem("amylet1", "амулет дыхания", {name: "amylet1", meta: 0}, {stack: 1});

IDRegistry.genItemID("testItem2"); Item.createItem("testItem2", "кристалл миров", {name: "kamen", meta: 0}, {stack: 1});

IDRegistry.genItemID("testItem1"); Item.createItem("testItem1", "нестабильной кристалл верхнего мира", {name: "kamen", meta: 1}, {stack: 1});

IDRegistry.genItemID("testItem3"); Item.createItem("testItem3", "нестабильной кристалл проклятого мира", {name: "kamen", meta: 2}, {stack: 1});

IDRegistry.genItemID("testItem10"); Item.createItem("testItem10", "нестабильной кристалл божественый мира", {name: "kamen", meta: 5}, {stack: 1});


IDRegistry.genItemID("testItem4"); Item.createItem("testItem4", "тёмный кристал", {name: "ryda", meta: 1}, {stack: 64});

IDRegistry.genItemID("testItem5"); Item.createItem("testItem5", "зелёный кристалл", {name: "ryda", meta: 2}, {stack: 64});

IDRegistry.genItemID("testItem6"); Item.createItem("testItem6", "красная материя", {name: "ryda", meta: 3}, {stack: 64});

IDRegistry.genItemID("testItem9"); Item.createItem("testItem9", "божествиный слиток", {name: "ryda", meta: 4}, {stack: 64});

IDRegistry.genItemID("testItem7"); Item.createItem("testItem7", "стабильный кристалл верхнего мира", {name: "kamen", meta: 3}, {stack: 1});

IDRegistry.genItemID("testItem8"); Item.createItem("testItem8", "стабильный кристалл проклятого мира", {name: "kamen", meta: 4}, {stack: 1});

IDRegistry.genItemID("testItem11"); Item.createItem("testItem11", "стабильной кристалл божественый мира", {name: "kamen", meta: 6}, {stack: 1});

IDRegistry.genItemID("kom1"); Item.createItem("kom1", "проклятая основа", {name: "kom", meta: 1}, {stack: 64});

IDRegistry.genItemID("kom2"); Item.createItem("kom2", "кристалл проклятого посоха", {name: "kom", meta: 2}, {stack: 64});

IDRegistry.genItemID("kom3"); Item.createItem("kom3", "кристалл посохо красной материи", {name: "kom", meta: 3}, {stack: 64});

IDRegistry.genItemID("kom4"); Item.createItem("kom4", "кристалл посохо зелёного кристала", {name: "kom", meta: 4}, {stack: 64});

IDRegistry.genItemID("pocox"); Item.createItem("pocox", "проклятый посох тьмы", {name: "pocox", meta: 1}, {stack: 1});



IDRegistry.genItemID("pocox1"); Item.createItem("pocox1", "посох красной материи", {name: "pocox", meta: 2}, {stack: 1});

IDRegistry.genItemID("pocox2"); Item.createItem("pocox2", "посох зелёного кристала", {name: "pocox", meta: 3}, {stack: 1});

IDRegistry.genItemID("kirka"); Item.createItem("kirka", "Кирка бога", {name: "kirka", meta: 0}, {stack: 1});

IDRegistry.genItemID("sword1");
Item.createItem("sword1", "меч бога", {name: "sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("armor1");
Item.createArmorItem("armor1", "божественый шлем" , {name: "armor", meta: 1}, {type: "helmet", armor: 6, durability: 10000, texture: "armor/armor1.png"}); 

IDRegistry.genItemID("armor2");
Item.createArmorItem("armor2" , "божественый нагрудник", {name: "armor", meta: 2}, {type: "chestplate", armor: 8, durability: 20000, texture: "armor/armor1.png"}); 

IDRegistry.genItemID("armor3");
Item.createArmorItem("armor3", "божественый поножи", {name: "armor", meta: 3}, {type: "leggings", armor: 6, durability: 10000, texture: "armor/armor2.png"});

IDRegistry.genItemID("armor4");
Item.createArmorItem("armor4", "божественый ботинки", {name: "armor", meta: 4}, {type: "boots", armor: 8, durability: 10000, texture: "armor/armor1.png"});

IDRegistry.genBlockID("altar");
Block.createBlock("altar", [ {name: "проклятый алтарь", texture: [["nis", 0], ["verx", 0], ["ctoran", 0]], inCreative: true} ]);

IDRegistry.genBlockID("altar1");
Block.createBlock("altar1", [ {name: "активированный алтарь", texture: [["nis", 1], ["verx", 1], ["ctoran", 0]], inCreative: true} ]);

IDRegistry.genBlockID("id");
Block.createBlock("id", [ {name: "трава проклятого мира", texture: [["purgatoriumstone", 0], ["purgatoriumgrasstop", 0], ["purgatoriumgrass", 0]], inCreative: true} ]);

IDRegistry.genBlockID("id1");
Block.createBlock("id1", [ {name: "камень проклятого  мира", texture: [["purgatoriumstone", 0]], inCreative: true} ]);
IDRegistry.genBlockID("testBlock1");                                                                 Block.createBlock("testBlock1", [{name:"руда миров", texture: [["ryda1", 0]], inCreative: true} ]);

IDRegistry.genBlockID("testBlock2");                                                                 Block.createBlock("testBlock2", [{name:"руда миров", texture: [["ryda2", 0]], inCreative: true} ]);

IDRegistry.genBlockID("testBlock3");                                                                 Block.createBlock("testBlock3", [{name:"руда миров", texture: [["ryda3", 0]], inCreative: true} ]);

IDRegistry.genBlockID("testBlock4");                                                                 Block.createBlock("testBlock4", [{name:"руда миров", texture: [["ryda4", 0]], inCreative: true} ]);

IDRegistry.genBlockID("testBlock5");                                                                 Block.createBlock("testBlock5", [{name:"руда миров", texture: [["ryda5", 0]], inCreative: true} ]);

IDRegistry.genBlockID("testBlock6");                                                                 Block.createBlock("testBlock6", [{name:"руда миров", texture: [["ryda6", 0]], inCreative: true} ]);

TileEntity.registerPrototype(BlockID.altar1, {

     defaultValues: {

          someValue: 0 

     },


     tick: function(){

         

          

     },

    

     click: function(coords, item, block){
    Player.addItemToInventory(ItemID.Boss1, 1);
World.setBlock(this.x, this.y, this.z, BlockID.altar, BlockID.altar);



     }

    

    

});

//

IMPORT("dimensions");

var Porn = new Dimension({
    name: "Porn",
    
    generation: {
        layers: [
{
    range: [0, 10],
    noise: {
        octaves: {
            count: 4,
            weight: 0.6,
            scale: [1, 0.4, 1]
        }
    },
                
    gradient: [[-1, 0.8], [-0.6, 0.5], [-0.2, 0.2], [0.2, 0.9], [0.6, 0.7], [1, 0.1]],
    terrain: {
        base: BlockID.id1,
        cover: {
             height: 4,
             top: BlockID.id,
             block: BlockID.id
        },
    }
},

        ],
    } , 
        
        decoration: {
            
        }, 
    
    environment: {
        
    },
    
    callbacks: { 
        tick: function() { 
            
        },

        generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("PornChunk",chunkX,chunkZ);

        },

        loaded: function() {
            
        },

        unloaded: function() {
            
        }
} 
});



























Recipes.addFurnace(BlockID.testBlock1, ItemID.testItem2, 0);

Recipes.addFurnace(BlockID.testBlock2, ItemID.testItem3, 0);

Recipes.addFurnace(BlockID.testBlock3, ItemID.testItem4, 0);

Recipes.addFurnace(BlockID.testBlock4, ItemID.testItem5, 0);

Recipes.addFurnace(BlockID.testBlock5, ItemID.testItem6, 0);

Recipes.addFurnace(BlockID.testBlock6, ItemID.testItem9, 0);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z,BlockID.testBlock1, 0, 4);
    }
}
);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z,BlockID.testBlock2, 0, 5);
    }
}
);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z,BlockID.testBlock6, 0, 5);
    }
}
);




Callback.addCallback("Generatemir2ChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z,BlockID.id1, 0, 10);
    }
}
);

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
        { 
            for(var i = 0; i < 10; i++){

        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 50);

        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.id1, 0 );
    }
        } 
});


Callback.addCallback("generationChunk", function(chunkX, chunkZ){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 2);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(this.x, this.y, this.z);
if(World.getBlockID(this.x, this.y, this.z)==BlockID.id){ 
	World.setBlock(this.x, this.y+1, this.z, BlockID.altar, BlockID.altar)
}}})  



IMPORT("SoundAPI");

//var Test5 = new Sound();
//Test5.setSource("Test.ogg");



var teleporterPorn = Porn.getTeleporter(); 

var teleporterBack = teleporterPorn.OVERWORLD;

Item.registerUseFunction("spawnboss1",
function(coords, item, block){
if(block.id==BlockID.altar){
    
    Player.decreaseCarriedItem();
Entity.spawnCustom("Test", coords.x, coords.y, coords.z);
World.setBlock(coords.x, coords.y, coords.z, BlockID.altar1, BlockID.altar1)
PlaySoundFile("Test.ogg");
}
}
);

Item.registerUseFunction("testItem2", function(coords, item, block)
{
Player.decreaseCarriedItem();
Player.setCarriedItem(ItemID.testItem1, 1);
}
);
Item.registerUseFunction("testItem3", function(coords, item, block)
{
Player.decreaseCarriedItem();
teleporterPorn.enter();
}
);

Item.registerUseFunction("testItem1", function(coords, item, block)
{
Player.decreaseCarriedItem();
teleporterBack.enter(); 
} 
);

Item.registerUseFunction("testItem8", function(coords, item, block)
{
teleporterPorn.enter();
}
);


Item.registerUseFunction("pocox", function(coords, item, block){
if (block.id==56){

World.setBlock(coords.x, coords.y, coords.z, BlockID.testBlock3, BlockID.testBlock3)
}
} 
);

Item.registerUseFunction("pocox1", function(coords, item, block){
if (block.id==129){
World.setBlock(coords.x, coords.y, coords.z, BlockID.testBlock5, BlockID.testBlock5)
}
} 
);

Item.registerUseFunction("pocox2", function(coords, item, block){
if (block.id==153){
World.setBlock(coords.x, coords.y, coords.z, BlockID.testBlock4, BlockID.testBlock4)
}
} 

);
Recipes.addShaped({id: ItemID.pocox, count: 1, data: 0},
	["*a*",
  "*x*",
  "***"], 
	['x' , ItemID.kom1, 0, 'a' , ItemID.kom2, 0]); 
Recipes.addShaped({id: ItemID.pocox1, count: 1, data: 0},
	["*a*",
  "*x*",
  "***"], 
	['x' , ItemID.kom1, 0, 'a' , ItemID.kom3, 0]); 
Recipes.addShaped({id: ItemID.pocox2, count: 1, data: 0},
	["*a*",
  "*x*",
  "***"], 
	['x' , ItemID.kom1, 0, 'a' , ItemID.kom4, 0]); 
Recipes.addShaped({id: ItemID.kom1, count: 1, data: 0},
	["bbx",
  "bxb",
  "abb"], 
	['x' , 280, 0, 'a' , 264, 0, 'b' , BlockID.id1, 0]); 
Recipes.addShaped({id: ItemID.kom2, count: 1, data: 0},
	["bbb",
  "bab",
  "bbb"], 
	['x' , 280, 0, 'a' , 264, 0, 'b' , BlockID.id1, 0]); 
Recipes.addShaped({id: ItemID.kom3, count: 1, data: 0},
	["bbb",
  "bab",
  "bbb"], 
	['x' , 280, 0, 'a' , 264, 0, 'b' , ItemID.testItem5, 0]); 
Recipes.addShaped({id: ItemID.kom4, count: 1, data: 0},
	["bbb",
  "bab",
  "bbb"], 
	['x' , 280, 0, 'a' , 264, 0, 'b' , ItemID.testItem4, 0]); 
Recipes.addShaped({id: ItemID.poic, count: 1, data: 0},
	["xbx",
  "bab",
  "xbx"], 
	['x' , 264, 0, 'a' , 266, 0, 'b' , ItemID.testItem6, 0]); 
Recipes.addShaped({id: ItemID.amylet1, count: 1, data: 0},
	["xbx",
  "bab",
  "xbx"], 
	['x' , 264, 0, 'a' , 266, 0, 'b' , ItemID.testItem5, 0]); 
Recipes.addShaped({id: ItemID.testItem7, count: 1, data: 0},
	["*b*",
  "bab",
  "*b*"], 
	['x' , 264, 0, 'a' , ItemID.testItem1, 0, 'b' , ItemID.testItem6, 0]); 
Recipes.addShaped({id: ItemID.testItem8, count: 1, data: 0},
	["*b*",
  "bab",
  "*b*"], 
	['x' , 264, 0, 'a' , ItemID.testItem3, 0, 'b' , ItemID.testItem6, 0]); 
Recipes.addShaped({id: ItemID.testItem10, count: 1, data: 0},
	["xbx",
  "bab",
  "*b*"], 
	['x' , 264, 0, 'a' , ItemID.testItem3, 0, 'b' , ItemID.testItem4, 0]);
	
Recipes.addShaped({id: ItemID.testItem11, count: 1, data: 0},
	["*b*",
  "bab",
  "*b*"], 
	['a' , ItemID.testItem10, 0, 'b' , ItemID.testItem6, 0]); 
Recipes.addShaped({id: ItemID.Guide, count: 1, data: 0},
	["***",
  "*a*",
  "***"], 
	['a' , 340, 0]);
Recipes.addShaped({id: BlockID.altar, count: 1, data: 0},
	["acb",
  "xxx",
  "xxx"], 
	['x' , 1, 0, 'c' , ItemID.testItem4, 0, 'a' , ItemID.testItem5, 0, 'b' , ItemID.testItem6, 0]); 
 Recipes.addShaped({id: ItemID.spawnboss1, count: 1, data: 0},
	["cac",
  "bxb",
  "cac"], 
	['c' , 20, 0, 'x' , ItemID.testItem3, 0, 'b' , ItemID.testItem4, 0, 'a' , ItemID.testItem5, 0]); 
 
Recipes.addShaped({id: ItemID.spawnboss1, count: 1, data: 0},
	["*x*", 
  "avb",
  "***"],	
['x' , ItemID.testItem3, 0, 'v' , ItemID.Boss1, 0, 'a' , ItemID.testItem5, 0, 'b' , ItemID.testItem6, 0]); 

Recipes.addShaped({id: ItemID.test10, count: 1, data: 0},
	["a*a", 
  "aca",
  "aaa"], 
	['c' , ItemID.boss, 0, 'a' , ItemID.testItem9, 0]); 
Recipes.addShaped({id: ItemID.koron, count: 1, data: 0},
	["***",
  "xcx",
  "*x*"], 
	['x' , 266, 0, 'c' , ItemID.testItem10, 0,]); 
 
Recipes.addShaped({id: ItemID.armor1, count: 1, data: 0},
	["cac",
  "c*c",
  "***"], 
	['c' , ItemID.testItem9, 0, 'a', ItemID.boss, 0]); 

Recipes.addShaped({id: ItemID.armor2, count: 1, data: 0},
  ["c*c", 
   "ccc",
   "cac"],
['c' , ItemID.testItem9, 0, 'a', ItemID.boss, 0]);

Recipes.addShaped({id: ItemID.armor3, count: 1, data: 0},
	["cxc", 
  "c*c", 
  "c*c"], 
	['x' , ItemID.boss, 0, 'c' , ItemID.testItem9, 0,]);

Recipes.addShaped({id: ItemID.armor4, count: 1, data: 0},
	["***",
  "c*c",
  "cxc"], 
	['x' , ItemID.boss, 0, 'c' , ItemID.testItem9, 0,]); 

Recipes.addShaped({id: ItemID.kirka, count: 1, data: 0},
	["aca",
  "*x*",
  "*x*"], 
	['x' , 280, 0, 'c' , ItemID.medal, 0, 'a' ,ItemID.testItem9, 0]);

Recipes.addShaped({id: ItemID.sword1, count: 1, data: 0},
	["*c*",
  "*a*",
  "*x*"], 
	['x' , 280, 0, 'c' , ItemID.testItem9, 0, 'a' , ItemID.medal, 0]); 






Baubles.registerBauble({
    id: ItemID.test10,
    type: "body",
    onEquip: function () {
        Entity.addEffect(Player.get(),
Native.PotionEffect.damageBoost, 9, 99999999, true, true) 
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 5);
    }
});

Baubles.registerBauble({
    id: ItemID.poic,
    type: "belt",
    onEquip: function () {
        Player.setFlyingEnabled(true);
    },

    onTakeOff: function () {
        Player.setFlyingEnabled(false);
    }
});

Baubles.registerBauble({
    id: ItemID.koron,
    type: "head",
    onEquip: function () {
        Entity.addEffect(Player.get(),
Native.PotionEffect.regeneration, 99999999, 9999999999, true, true) 
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 10);
    }
});

Baubles.registerBauble({
    id: ItemID.amylet1,
    type: "amulet",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 99999999, 99999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 13);
    }
});






  




























var mir2 = new Dimension({
    name: "mir2",
    
    generation: {
        layers: [
{
    range: [0, 60],
    noise: {
        octaves: {
            count: 2,
            weight: 0.6,
            scale: [1, 0.4, 1]
        }
    },
                
    gradient: [[-1, 0.8], [-0.6, 0.5], [-0.2, 0.2], [0.2, 0.9], [0.6, 0.7], [1, 0.1]],
    terrain: {
        base: 1,
        cover: {
             height: 6,
             top: 2,
             block: 1
        },
}
},

        ],
    } , 
        
        decoration: {
            
        }, 
    
    environment: {
        
    },
    
    callbacks: { 
        tick: function() { 



        },

        generateChunk: function(chunkX, chunkZ){
        

        },

        loaded: function() {
            
        },

        unloaded: function() {
            
        }
} 
});
 





var teleportermir2 = mir2.getTeleporter(); 

var teleporterBack2 = teleportermir2.OVERWORLD;





Item.registerUseFunction("testItem10", function(coords, item, block)
{
Player.decreaseCarriedItem()
teleportermir2.enter();
}
);

Item.registerUseFunction("testItem11", function(coords, item, block)
{
teleportermir2.enter();
}
);

Item.registerUseFunction("testItem7", function(coords, item, block)
{
teleporterBack2.enter(); 
} 
);



tick: function() { 

};


Callback.addCallback("mir2chank", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = Generationmir2.randomCoords(schunkX, schunkZ, 1, 20);
            Generationmir2.generateOre(coords.x, coords.y, coords.z,BlockID.testBlock6, 0,1000);
    }
}
);


ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers; 

 

GuideAPI.registerGuide("guideTest", { 
item: ItemID.Guide, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 
pages: { 
"default": {  
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "начало", size: 20, link: "test"},
{text: "другии миры и как попасть туда", size: 20, link: "test2"},
{text: "посохи и руды", size: 20, link: "test5"},
]
}
}, 

"test": { 
preLink: "default",
nextLink: "test1", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 2, 
item_size: 100, 
items: [ 
{id: BlockID.testBlock1}, 
{id: BlockID.testBlock2}, 
], 
elements: [ 
{text: "начало", size: 30}, 
{text: "для начало вам нужно добыть 2 руды которые можно обработать в печке", size: 20}, 
]
}
},    

"test1": { 
preLink: "test",
nextLink: "default", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 3, 
item_size: 100, 
items: [ 
{id: ItemID.testItem2},
{id: ItemID.testItem1},
{id: ItemID.testItem3}, 
], 
elements: [ 
{text: "начало", size: 30}, 
{text: "после того как вы переплавите 2 руды вы получите 2 нестабильных кристаллов тапните серым кристалла по любому блоку и у вас будет зелёный кристал", size: 20}, 
]
}
},      
"test": { 
preLink: "default",
nextLink: "test1", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 2, 
item_size: 100, 
items: [ 
{id: BlockID.testBlock1}, 
{id: BlockID.testBlock2}, 
], 
elements: [ 
{text: "начало", size: 30}, 
{text: "для начало вам нужно добыть 2 руды которые можно обработать в печке", size: 20}, 
]
}
},    

"test2": { 
preLink: "default",
nextLink: "test3", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.testItem1}, 
], 
elements: [ 
{text: "кристалл верхнего мира", size: 30}, 
{text: "бирите его всегда либо вы не сможете вернуться из другого мира что бы его использовать тапните и вы очутитесь в обычном мире", size: 20}, 
]
} 
}, 

"test3": { 
preLink: "test2",
nextLink: "test4", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.testItem3}, 
], 
elements: [ 
{text: "кристалл проклятого мира", size: 30}, 
{text: "этот кристалл добывается в шахте и является основой мода используется тагже как кристалл верхнего мира", size: 20}, 
]
} 
},   

"test4": { 
preLink: "test3",
nextLink: "default", 
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт кристала", 
recipes: [ 
{ 
grid: [ 
["x", "b", "x"], 
["b", "a", "b"], 
["s", "b", "s"] 
], 
materials: { 
"b": {id: ItemID.testItem4, data: 0}, 
"a": {id: ItemID.testItem8, data: 0},
"x": {id: 264, data: 0},
"s": {id: 0, data: 0},
}, 
result: {id: ItemID.testItem10, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.testItem10}, 
], 
elements: [ 
{text: "кристалл божественого мира", size: 30}, 
{text: "с добычей этого кристалла придётся по геммороится используется тагже как остальные", size: 20}, 
]
} 
},      

"test5": { 
preLink: "default", 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Craft measurement", size: 30},
{text: "этот мод добавит миры в майнкрафт пе", size: 20},
] 
}, 

right: { 
controller: PageControllers.BASIC_PAGE, 
elements: [ 
{text: "компоненты для посохов", link: "kom", size: 20},
{text: "посох тьмы", link: "pocox1", size: 20},
{text: "посох зелёного кристала", link: "pocox2", size: 20},
{text: "посох красной материи", link: "pocox3", size: 20},
{text: "руды", link: "ryda", size: 20},
]
}
},    

"kom": { 
preLink: "test5", 
nextLink: "kom2",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт компонента 1", 
recipes: [ 
{ 
grid: [ 
["b", "b", "x"], 
["b", "x", "b"], 
["a", "b", "b"] 
], 
materials: { 
"b": {id: BlockID.id1, data: 0}, 
"a": {id: 264, data: 0},
"x": {id: 280, data: 0}, 
}, 
result: {id: ItemID.kom1, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.kom1}, 
], 
elements: [ 
{text: "проклятая основа", size: 30}, 
{text: "используется в кравтах посохов", size: 20}, 
]
} 
}, 

"kom2": { 
preLink: "kom", 
nextLink: "kom3",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт компонента 2", 
recipes: [ 
{ 
grid: [ 
["b", "b", "b"], 
["b", "a", "b"], 
["b", "b", "b"] 
], 
materials: { 
"b": {id: BlockID.id1, data: 0}, 
"a": {id: 264, data: 0}, 
}, 
result: {id: ItemID.kom2, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.kom2}, 
], 
elements: [ 
{text: "кристалл проклятого посоха", size: 30}, 
{text: "используется в кравтах посохов", size: 20}, 
]
} 
}, 

"kom3": { 
preLink: "kom2", 
nextLink: "kom4",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт компонента 3", 
recipes: [ 
{ 
grid: [ 
["b", "b", "b"], 
["b", "a", "b"], 
["b", "b", "b"] 
], 
materials: { 
"b": {id: ItemID.testItem5, data: 0}, 
"a": {id: 264, data: 0}, 
}, 
result: {id: ItemID.kom3, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.kom3}, 
], 
elements: [ 
{text: "кристалл посоха красной материи", size: 30}, 
{text: "используется в кравтах посохов", size: 20}, 
]
}
}, 

"kom4": { 
preLink: "kom3", 
nextLink: "test5",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт компонента 4", 
recipes: [ 
{ 
grid: [ 
["b", "b", "b"], 
["b", "a", "b"], 
["b", "b", "b"] 
], 
materials: { 
"a": {id: 264, data: 0}, 
"b": {id: ItemID.testItem4, data: 0}, 
}, 
result: {id: ItemID.kom4, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.kom4}, 
], 
elements: [ 
{text: "кристалл посоха зелёного кристалла", size: 30}, 
{text: "используется в кравтах посохов", size: 20}, 
] 
} 
}, 

"pocox1": { 
preLink: "test5", 
nextLink: "pocox2",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт посоха тьмы", 
recipes: [ 
{ 
grid: [ 
["b", "s", "s"], 
["a", "s", "s"], 
["s", "s", "s"] 
], 
materials: { 
"a": {id: ItemID.kom1, data: 0}, 
"b": {id: ItemID.kom2, data: 0},
"s": {id: 0, data: 0}, 
}, 
result: {id: ItemID.pocox, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.pocox}, 
], 
elements: [ 
{text: "посох тьмы", size: 30}, 
{text: "используется для создание руды", size: 20}, 
] 
} 
}, 

"pocox2": { 
preLink: "test5", 
nextLink: "pocox3",
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт посоха зелёный кристалов", 
recipes: [ 
{ 
grid: [ 
["b", "s", "s"], 
["a", "s", "s"], 
["s", "s", "s"] 
], 
materials: { 
"a": {id: ItemID.kom1, data: 0}, 
"b": {id: ItemID.kom4, data: 0},
"s": {id: 0, data: 0}, 
}, 
result: {id: ItemID.pocox2, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.pocox2}, 
], 
elements: [ 
{text: "посох зелёных кристалов", size: 30}, 
{text: "используется для создание руды", size: 20}, 
] 
} 
}, 

"pocox3": { 
preLink: "test5", 
left: { 
controller: PageControllers.GRID_3x3_PAGE, 
title: "крафт посоха красной материи", 
recipes: [ 
{ 
grid: [ 
["b", "s", "s"], 
["a", "s", "s"], 
["s", "s", "s"] 
], 
materials: { 
"a": {id: ItemID.kom1, data: 0}, 
"b": {id: ItemID.kom3, data: 0},
"s": {id: 0, data: 0}, 
}, 
result: {id: ItemID.pocox1, count: 1} 
} 
], 
elements: [
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 1, 
item_size: 100, 
items: [ 
{id: ItemID.pocox1}, 
], 
elements: [ 
{text: "посох красной материи", size: 30}, 
{text: "используется для создание руды", size: 20}, 
]
} 
},

"ryda": { 
preLink: "test5",
nextLink: "ryda2", 
left: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 2, 
item_size: 100, 
items: [
{id: 56}, 
{id: BlockID.testBlock3}, 
], 
elements: [ 
{text: "Руда Миров", size: 30},
{text: "это руда добывается лехко вам поднабится посох тьмы,и тапните им по алманой руды", size: 20},
] 
}, 

right: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 2, 
item_size: 100, 
items: [ 
{id: 153}, 
{id: BlockID.testBlock4}, 
], 
elements: [ 
{text: "Руда Миров", size: 30}, 
{text: "Это руда добывается ну нормально Вам понабитсянабится посох зелёных кристалов и тапните им по кварцевай руде", size: 20}, 
]
}
},  

"ryda2": { 
preLink: "ryda",
nextLink: "ryda3", 
left: { 
controller: PageControllers.ITEM_GRID_PAGE, 
columns: 2, 
item_size: 100, 
items: [
{id: 129}, 
{id: BlockID.testBlock5}, 
], 
elements: [ 
{text: "Руда Миров", size: 30},
{text: "это руда добывается сложно вам поднабится посох красной материи,и тапните им по изумрудной руде", size: 20},
] 
}, 

right: 
{ 
controller: PageControllers.BASIC_PAGE, 
elements: [ 

{text: "возможно скоро...", size: 20}, 
] 
},
}
}   
});
});
IMPORT("ToolType");


ToolAPI.addToolMaterial("god", {
    durability: 20000,
    level: 5,
    efficiency: 40,
    damage: 0,
    enchantability: 14
});

ToolAPI.setTool(ItemID["kirka"], "god", ToolType.pickaxe);

ToolAPI.addToolMaterial("godsword", {
    drability: 5000,
    level: 5,
    efficiency: 1,
    damage: 80,
    enchantability: 14
});

ToolAPI.setTool(ItemID["sword1"], "godsword", ToolType.sword);

importLib("AdvancedAI", "*");
   
   


   
var Test= MobRegistry.registerEntity("Test");
Test.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);
 Entity.setSkin(this.entity, "mods/skin_0.png");
Entity.setMaxHealth(this.entity, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth(100);
Entity.setNameTag(this.entity, "Смерть" + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth(100));
if(Math.random() < 0.08){
 	var coords = Entity.getPosition(this.entity);
 	Entity.spawn(coords.x , coords.y , coords.z , 32);
 } 
attackedBy: function(attacker, amount){

}

}});
Test.customizeDescription({
	
 getHitbox: function(){
 return {w: 2, h: 2}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.testItem3, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 drop.push({id: ItemID.boss, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 drop.push({id: ItemID.medal, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.03});
 drop.push({id: ItemID.cloman, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.5});
 

 return drop;
 
 
}
});
Test.customizeAI({
getHealth: function(){
  return 100;},
     
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 15,
attack_rate: 15
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 1,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 50
}
};
}
});







