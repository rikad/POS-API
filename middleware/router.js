export const checkRequiredParam = (routeHandler, ...param) => {
    return (req, res, next) => {
        for(let requireKey of param) {
            req.body = JSON.parse(JSON.stringify(req.body))
            if(!(req.body.hasOwnProperty(requireKey))) {
                return res.status(400).json({
                    code : 400,
                    message : `Cannot find ${requireKey} in request body`
                })
            }
        }

        routeHandler(req, res, next);
    }
}

export const errorChecking = (routeHandler) => {
    return async (req, res, next) => {
        try {
            await routeHandler(req, res, next);
        } catch (err) {
            next(err);
        }
    }
}
