/**
 * Created by bshen on 05/10/2014.
 */


module.exports = {
    index: function(req,res){
        if(!req.param("content")){
            return res.serverError();
        }
        return sails.sockets.blast('newContent', req.param("content"));
    },

    remove: function(req,res){
        if(!req.param("content")){
            return res.serverError();
        }
        return sails.sockets.blast('remove',req.param("content"));
    }
};