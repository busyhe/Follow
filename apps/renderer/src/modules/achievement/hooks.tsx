import { useCallback } from "react"

import { SlideUpModal } from "~/components/ui/modal/stacked/custom-modal"
import { useModalStack } from "~/components/ui/modal/stacked/hooks"

import { AchievementModalContent } from "./AchievementModalContent"

export const useAchievementModal = () => {
  const { present } = useModalStack()

  return useCallback(() => {
    present({
      id: "achievement",
      title: "Achievements",
      content: AchievementModalContent,
      CustomModalComponent: SlideUpModal,
      modalContainerClassName: "overflow-hidden",
      overlay: true,
    })
  }, [present])
}
