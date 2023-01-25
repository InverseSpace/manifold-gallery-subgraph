import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Marketplace/Marketplace"

export function createAdminApprovedEvent(
  account: Address,
  sender: Address
): AdminApproved {
  let adminApprovedEvent = changetype<AdminApproved>(newMockEvent())

  adminApprovedEvent.parameters = new Array()

  adminApprovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  adminApprovedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return adminApprovedEvent
}

export function createAdminRevokedEvent(
  account: Address,
  sender: Address
): AdminRevoked {
  let adminRevokedEvent = changetype<AdminRevoked>(newMockEvent())

  adminRevokedEvent.parameters = new Array()

  adminRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  adminRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return adminRevokedEvent
}

export function createMarketplaceEnabledEvent(
  requestor: Address,
  value: boolean
): MarketplaceEnabled {
  let marketplaceEnabledEvent = changetype<MarketplaceEnabled>(newMockEvent())

  marketplaceEnabledEvent.parameters = new Array()

  marketplaceEnabledEvent.parameters.push(
    new ethereum.EventParam("requestor", ethereum.Value.fromAddress(requestor))
  )
  marketplaceEnabledEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return marketplaceEnabledEvent
}

export function createMarketplaceFeesEvent(
  requestor: Address,
  feeBPS: i32,
  referrerBPS: i32
): MarketplaceFees {
  let marketplaceFeesEvent = changetype<MarketplaceFees>(newMockEvent())

  marketplaceFeesEvent.parameters = new Array()

  marketplaceFeesEvent.parameters.push(
    new ethereum.EventParam("requestor", ethereum.Value.fromAddress(requestor))
  )
  marketplaceFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feeBPS",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeBPS))
    )
  )
  marketplaceFeesEvent.parameters.push(
    new ethereum.EventParam(
      "referrerBPS",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referrerBPS))
    )
  )

  return marketplaceFeesEvent
}

export function createMarketplaceRoyaltyEngineUpdateEvent(
  royaltyEngineV1: Address
): MarketplaceRoyaltyEngineUpdate {
  let marketplaceRoyaltyEngineUpdateEvent = changetype<
    MarketplaceRoyaltyEngineUpdate
  >(newMockEvent())

  marketplaceRoyaltyEngineUpdateEvent.parameters = new Array()

  marketplaceRoyaltyEngineUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyEngineV1",
      ethereum.Value.fromAddress(royaltyEngineV1)
    )
  )

  return marketplaceRoyaltyEngineUpdateEvent
}

export function createMarketplaceSellerRegistryEvent(
  requestor: Address,
  registry: Address
): MarketplaceSellerRegistry {
  let marketplaceSellerRegistryEvent = changetype<MarketplaceSellerRegistry>(
    newMockEvent()
  )

  marketplaceSellerRegistryEvent.parameters = new Array()

  marketplaceSellerRegistryEvent.parameters.push(
    new ethereum.EventParam("requestor", ethereum.Value.fromAddress(requestor))
  )
  marketplaceSellerRegistryEvent.parameters.push(
    new ethereum.EventParam("registry", ethereum.Value.fromAddress(registry))
  )

  return marketplaceSellerRegistryEvent
}

export function createMarketplaceWithdrawEvent(
  requestor: Address,
  erc20: Address,
  amount: BigInt,
  receiver: Address
): MarketplaceWithdraw {
  let marketplaceWithdrawEvent = changetype<MarketplaceWithdraw>(newMockEvent())

  marketplaceWithdrawEvent.parameters = new Array()

  marketplaceWithdrawEvent.parameters.push(
    new ethereum.EventParam("requestor", ethereum.Value.fromAddress(requestor))
  )
  marketplaceWithdrawEvent.parameters.push(
    new ethereum.EventParam("erc20", ethereum.Value.fromAddress(erc20))
  )
  marketplaceWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  marketplaceWithdrawEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return marketplaceWithdrawEvent
}

export function createMarketplaceWithdrawEscrowEvent(
  requestor: Address,
  erc20: Address,
  amount: BigInt
): MarketplaceWithdrawEscrow {
  let marketplaceWithdrawEscrowEvent = changetype<MarketplaceWithdrawEscrow>(
    newMockEvent()
  )

  marketplaceWithdrawEscrowEvent.parameters = new Array()

  marketplaceWithdrawEscrowEvent.parameters.push(
    new ethereum.EventParam("requestor", ethereum.Value.fromAddress(requestor))
  )
  marketplaceWithdrawEscrowEvent.parameters.push(
    new ethereum.EventParam("erc20", ethereum.Value.fromAddress(erc20))
  )
  marketplaceWithdrawEscrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return marketplaceWithdrawEscrowEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
