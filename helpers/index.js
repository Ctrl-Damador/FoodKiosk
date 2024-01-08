export const formatCash = (amount) => {

    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}