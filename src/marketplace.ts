import {
  AdminApproved as AdminApprovedEvent,
  AdminRevoked as AdminRevokedEvent,
  MarketplaceEnabled as MarketplaceEnabledEvent,
  MarketplaceFees as MarketplaceFeesEvent,
  MarketplaceRoyaltyEngineUpdate as MarketplaceRoyaltyEngineUpdateEvent,
  MarketplaceSellerRegistry as MarketplaceSellerRegistryEvent,
  MarketplaceWithdraw as MarketplaceWithdrawEvent,
  MarketplaceWithdrawEscrow as MarketplaceWithdrawEscrowEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Marketplace/Marketplace"
import {
  AdminApproved,
  AdminRevoked,
  MarketplaceEnabled,
  MarketplaceFees,
  MarketplaceRoyaltyEngineUpdate,
  MarketplaceSellerRegistry,
  MarketplaceWithdraw,
  MarketplaceWithdrawEscrow,
  OwnershipTransferred
} from "../generated/schema"

export function handleAdminApproved(event: AdminApprovedEvent): void {
  let entity = new AdminApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminRevoked(event: AdminRevokedEvent): void {
  let entity = new AdminRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceEnabled(event: MarketplaceEnabledEvent): void {
  let entity = new MarketplaceEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestor = event.params.requestor
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceFees(event: MarketplaceFeesEvent): void {
  let entity = new MarketplaceFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestor = event.params.requestor
  entity.feeBPS = event.params.feeBPS
  entity.referrerBPS = event.params.referrerBPS

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceRoyaltyEngineUpdate(
  event: MarketplaceRoyaltyEngineUpdateEvent
): void {
  let entity = new MarketplaceRoyaltyEngineUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.royaltyEngineV1 = event.params.royaltyEngineV1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceSellerRegistry(
  event: MarketplaceSellerRegistryEvent
): void {
  let entity = new MarketplaceSellerRegistry(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestor = event.params.requestor
  entity.registry = event.params.registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceWithdraw(
  event: MarketplaceWithdrawEvent
): void {
  let entity = new MarketplaceWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestor = event.params.requestor
  entity.erc20 = event.params.erc20
  entity.amount = event.params.amount
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketplaceWithdrawEscrow(
  event: MarketplaceWithdrawEscrowEvent
): void {
  let entity = new MarketplaceWithdrawEscrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestor = event.params.requestor
  entity.erc20 = event.params.erc20
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
