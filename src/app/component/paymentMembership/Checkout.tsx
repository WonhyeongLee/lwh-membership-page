import MembershipPrice from "../membershipPrice/MembershipPrice"
import SponsorsReview from "../sponsorsReview/SponsorsReview"
import * as styles from './Checkout.css'
const Checkout = () => {
  return (
    <section className={styles.CheckoutContainer}>
      <SponsorsReview />
      <MembershipPrice />
    </section>
  )
}

export default Checkout