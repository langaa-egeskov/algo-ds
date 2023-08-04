function isAcceptable (act, exp, err) {
    if ((act <= exp + err) && (act >= exp - err)) {
        return true
    }
    return false
}

export {isAcceptable}