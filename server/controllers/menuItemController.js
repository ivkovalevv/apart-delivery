const uuid = require('uuid');
const path = require('path');
const {MenuItem, MenuItemInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class menuItemController {
    async create(req, res, next) {
        try{
            let {name, price, promo, raiting, typeId, info} = req.body;
            const {image} = req.files;
            let fileName = uuid.v4() + ".png";
            image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const menuItem = await MenuItem.create({name, price, image: fileName, typeId, raiting, promo});

            if(info){
                info = JSON.parse(info);
                info.forEach(item => {
                    MenuItemInfo.create({
                        title: item.title,
                        description: item.description,
                        menuItemId: menuItem.id,
                    })
                });
            }

            return res.json(menuItem);
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {typeId, raiting} = req.query;
        let menuItems;
        if(!typeId && !raiting){
            menuItems = await MenuItem.findAndCountAll();
        } 
        if(typeId && !raiting) {
            menuItems = await MenuItem.findAndCountAll({where: {typeId}});
        }
        if(!typeId && raiting) {
            menuItems = await MenuItem.findAndCountAll({where: {raiting}});
        }
        if(typeId && raiting) {
            menuItems = await MenuItem.findAndCountAll({where: {typeId, raiting}});
        }

        return res.json(menuItems);
    }

    async getOne(req, res) {
        const {id} = req.params
        const menuItem = await MenuItem.findOne(
            {
                where: {id},
                include: [{model: MenuItemInfo, as: 'info'}]
            }
        )

        return res.json(menuItem);
    }
}

module.exports = new menuItemController()