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
