package keeper

import (
	"github.com/nzee/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
