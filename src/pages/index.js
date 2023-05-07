import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Flamez Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Flamez Docs</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/evmos-cli/single-node"
                header={{
                  label: "🚀 Launch Your Local Node",
                }}
                body={{
                  label:
                    "Getting started on Flamez is simple and easy with a local node",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "☄️ Learn about Flamez",
                }}
                body={{
                  label:
                    "Discover why Flamez is the flagship EVM on the Butane Ecosystem",
                }}
              />

              <Card
                to="./validate"
                header={{
                  label: "😎 Become a Validator",
                }}
                body={{
                  label:
                    "Join Flamez's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="./develop/api"
                header={{
                  label: "💻 View Flamez APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "🛠️ Launch dApp on Flamez",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="./protocol/security"
                header={{
                  label: "🛡️ Security on Flamez",
                }}
                body={{
                  label:
                    "Learn about our Security Policy",
                }}
              />

              <Card
                to="https://github.com/BUTANE-Smart-Chain"
                header={{
                  label: "🛠️ Contribute to Flamez",
                }}
                body={{
                  label:
                    "Contribute to the thriving ecosystem of Flamez and its open-source initiatives",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home