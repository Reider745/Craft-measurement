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
