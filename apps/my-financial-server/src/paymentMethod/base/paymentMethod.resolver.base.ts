/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PaymentMethod } from "./PaymentMethod";
import { PaymentMethodCountArgs } from "./PaymentMethodCountArgs";
import { PaymentMethodFindManyArgs } from "./PaymentMethodFindManyArgs";
import { PaymentMethodFindUniqueArgs } from "./PaymentMethodFindUniqueArgs";
import { DeletePaymentMethodArgs } from "./DeletePaymentMethodArgs";
import { PaymentMethodService } from "../paymentMethod.service";
@graphql.Resolver(() => PaymentMethod)
export class PaymentMethodResolverBase {
  constructor(protected readonly service: PaymentMethodService) {}

  async _paymentMethodsMeta(
    @graphql.Args() args: PaymentMethodCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PaymentMethod])
  async paymentMethods(
    @graphql.Args() args: PaymentMethodFindManyArgs
  ): Promise<PaymentMethod[]> {
    return this.service.paymentMethods(args);
  }

  @graphql.Query(() => PaymentMethod, { nullable: true })
  async paymentMethod(
    @graphql.Args() args: PaymentMethodFindUniqueArgs
  ): Promise<PaymentMethod | null> {
    const result = await this.service.paymentMethod(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PaymentMethod)
  async deletePaymentMethod(
    @graphql.Args() args: DeletePaymentMethodArgs
  ): Promise<PaymentMethod | null> {
    try {
      return await this.service.deletePaymentMethod(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
